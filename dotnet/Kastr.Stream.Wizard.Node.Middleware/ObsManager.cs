using Microsoft.Extensions.Logging;
using OBSWebsocketDotNet;
using OBSWebsocketDotNet.Types;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Kastr.Stream.Wizard.Shared.Notifications;
using Tac.Stream.Tv.Server.Manager.Entities;

namespace Tac.Stream.Tv.Server.Manager
{
    public class ObsManager
    {
        private const string ProcessName = "obs64";
        private readonly GlobalStateManager _globalStateManager;
        private readonly NotificationHandler _notificationHandler;
        private readonly OBSWebsocket _obs;
        private CancellationTokenSource _obsScreenshotTaskCancellationToken;
        private readonly ILogger<ObsManager> _logger;

        public ObsManager(GlobalStateManager globalStateManager, NotificationHandler notificationHandler, ILogger<ObsManager> logger)
        {
            _logger = logger;
            _globalStateManager = globalStateManager;
            _notificationHandler = notificationHandler;
            _obs = new OBSWebsocket();

            _obs.Connected += OnConnected;
            _obs.Disconnected += OnDisconnect;
            _obs.StreamingStateChanged += OnStreamingStateChange;
            _obs.SceneChanged += OnSceneChange;
            _obs.PreviewSceneChanged += OnPreviewSceneChanged;
        }

        public async Task StartAsync()
        {
            if (IsRunning())
            {
                _logger.LogWarning("OBS allready running");
                return;
            }
            
            var oldState = _globalStateManager.GlobalState;

            try
            {
                _logger.LogInformation("Start process -> OBS");
                oldState.ObsState.State = ObsStateType.Opening;
                oldState.ObsState.ErrorMessages.Clear();
                await _globalStateManager.UpdateState(oldState);

                ProcessStartInfo proc = new ProcessStartInfo();
                proc.FileName = @"C:\windows\system32\cmd.exe";
                //TODO: Add path to appsettings.json
                proc.Arguments = "/c start /d \"C:\\Program Files\\obs-studio\\bin\\64bit\" obs64.exe";
                Process.Start(proc);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Cant start process OBS");
                return;
            }
            
            var a = new CancellationTokenSource();
            var token = a.Token;

            Task.Run(async () =>
            {
                var check = true;
                while (check)
                {
                    if (IsRunning())
                    {
                        check = false;
                    }
                    
                    await Task.Delay(500);
                }
                
                try
                {
                    _obs.Connect("ws://localhost:4444", "1234");
                    oldState = _globalStateManager.GlobalState;
                    oldState.ObsState.State = ObsStateType.Opened;
                    oldState.ObsState.ErrorMessages.Clear();

                    await _globalStateManager.UpdateState(oldState);
                }
                catch (AuthFailureException)
                {
                    oldState = _globalStateManager.GlobalState;
                    oldState.ObsState.State = ObsStateType.Aborted;
                    oldState.ObsState.ErrorMessages.Add("Error of auth trying connect to obs websockets.");

                    await _globalStateManager.UpdateState(oldState);
                }
                catch (ErrorResponseException ex)
                {
                    oldState = _globalStateManager.GlobalState;
                    oldState.ObsState.State = ObsStateType.Aborted;
                    oldState.ObsState.ErrorMessages.Add("Error trying connect to obs websockets.");
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Cant connect to obs");
                }
            }, token);
        }

        public async Task CloseAsync(bool hasCustomState)
        {
            if (!IsRunning())
            {
                return;
            }

            _obsScreenshotTaskCancellationToken.Cancel();

            if (!hasCustomState)
            {
                var oldState = _globalStateManager.GlobalState;
                oldState.ObsState.State = ObsStateType.Closing;
                oldState.ObsState.ErrorMessages.Clear();

                await _globalStateManager.UpdateState(oldState);
            }

            Process.GetProcessesByName(ProcessName).FirstOrDefault()?.Kill();
        }

        public async Task StartStreamAsync()
        {
            var oldState = _globalStateManager.GlobalState;

            if (oldState.ObsState.State == ObsStateType.Streaming || oldState.ObsState.State == ObsStateType.Closed)
            {
                return;
            }

            oldState.ObsState.State = ObsStateType.StartingStream;
            oldState.ObsState.ErrorMessages.Clear();

            await _globalStateManager.UpdateState(oldState);

            _obs.StartStreaming();
        }

        public async Task StopStreamAsync()
        {
            var oldState = _globalStateManager.GlobalState;

            if (oldState.ObsState.State != ObsStateType.Streaming)
            {
                return;
            }

            oldState.ObsState.State = ObsStateType.StopingStream;
            oldState.ObsState.ErrorMessages.Clear();

            await _globalStateManager.UpdateState(oldState);

            _obs.StopStreaming();
        }

        public List<string> GetScenes()
        {
            return _obs.ListScenes().Select(x => x.Name).ToList();
        }

        public void SetCurrentSceneByName(string scene)
        {
            _globalStateManager.GlobalState.ObsState.State = ObsStateType.ChangingScene;
            _globalStateManager.UpdateState().ConfigureAwait(false);
            
            _obs.SetCurrentScene(scene);
        }

        public void SetPreviewSceneByName(string scene)
        {
            _globalStateManager.GlobalState.ObsState.State = ObsStateType.ChangingScenePreview;
            _globalStateManager.UpdateState().ConfigureAwait(false);
            
            _obs.SetPreviewScene(scene);
        }

        private bool IsRunning()
        {
            return Process.GetProcessesByName(ProcessName).Any();
        }

        private void OnConnected(object sender, EventArgs e)
        {
            var oldState = _globalStateManager.GlobalState;
            oldState.ObsState.CurrenteScene = _obs.GetCurrentScene().Name;
            oldState.ObsState.PreviewScene = _obs.GetPreviewScene().Name;

            _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();

            _obsScreenshotTaskCancellationToken = new CancellationTokenSource();
            var token = _obsScreenshotTaskCancellationToken.Token;

            Task.Run(async () =>
            {
                try
                {
                    while (IsRunning())
                    {
                        await _notificationHandler.SendNotificationToWebSocketPreviewAll(
                                new
                                {
                                    CurrentScene = _obs.TakeSourceScreenshot(_globalStateManager.GlobalState.ObsState.CurrenteScene, "jpeg", null, 1280, 720)
                                        .ImageData
                                }
                           );

                        await Task.Delay(25, token);
                    }
                }
                catch (Exception exception)
                {
                    _logger.LogError(exception, "Error on get images from obs.");
                }
            }, token);
            
            Task.Run(async () =>
            {
                try
                {
                    var scenes = _obs.GetSceneList().Scenes;
                    
                    while (IsRunning())
                    {
                        var previews = new Dictionary<string, string>();
                        foreach (var scene in scenes)
                        {
                            previews.Add(scene.Name, _obs.TakeSourceScreenshot(scene.Name, "jpeg", null, 1280, 720)
                                .ImageData);
                        }
                        
                        await _notificationHandler.SendNotificationToWebSocketPreviewAll(
                            new
                            {
                                Previews = previews
                            }
                        );

                        await Task.Delay(250, token);
                    }
                }
                catch (Exception exception)
                {
                    _logger.LogError(exception, "Error on get images from obs.");
                }
            }, token);
        }

        private void OnDisconnect(object sender, EventArgs e)
        {
            var oldState = _globalStateManager.GlobalState;
            oldState.ObsState.State = ObsStateType.Closed;
            oldState.ObsState.ErrorMessages.Clear();

            _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();
            _logger.LogWarning("Obs disconnected.");
        }

        private void OnStreamingStateChange(OBSWebsocket sender, OutputState newState)
        {
            var oldState = _globalStateManager.GlobalState;

            switch (newState)
            {
                case OutputState.Started:
                    oldState.ObsState.State = ObsStateType.Streaming;
                    break;

                case OutputState.Stopped:
                    oldState.ObsState.State = ObsStateType.Opened;
                    break;

                default:
                    //Todo: add logs.
                    break;
            }

            oldState.ObsState.ErrorMessages.Clear();

            _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();
        }

        private void OnSceneChange(OBSWebsocket sender, string newSceneName)
        {
            _globalStateManager.GlobalState.ObsState.CurrenteScene = newSceneName;
            _globalStateManager.GlobalState.ObsState.State = ObsStateType.ChangedScene;

            _globalStateManager.UpdateState().ConfigureAwait(false);
        }

        private void OnPreviewSceneChanged(OBSWebsocket sender, string newSceneName)
        {
            _globalStateManager.GlobalState.ObsState.PreviewScene = newSceneName;
            _globalStateManager.GlobalState.ObsState.State = ObsStateType.ChangedScenePreview;
            
            _globalStateManager.UpdateState().ConfigureAwait(false);
        }
    }
}
