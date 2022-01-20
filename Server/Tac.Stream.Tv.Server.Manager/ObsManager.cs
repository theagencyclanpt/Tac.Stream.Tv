using OBSWebsocketDotNet;
using OBSWebsocketDotNet.Types;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Tac.Stream.Tv.Server.Manager.Entities;
using Tac.Stream.Tv.Shared.Notifications;

namespace Tac.Stream.Tv.Server.Manager
{
    public class ObsManager
    {
        private GlobalStateManager _globalStateManager;
        private NotificationHandler _notificationHandler;
        private OBSWebsocket _obs;
        private CancellationTokenSource ObsScreenshotTaskCancellationToken;

        public ObsManager(GlobalStateManager globalStateManager, NotificationHandler notificationHandler)
        {
            _globalStateManager = globalStateManager;
            _notificationHandler = notificationHandler;
            _obs = new OBSWebsocket();

            _obs.Connected += onConnected;
            _obs.Disconnected += onDisconnect;
            _obs.StreamingStateChanged += onStreamingStateChange;
            _obs.SceneChanged += onSceneChange;
            _obs.PreviewSceneChanged += onPreviewSceneChanged;
        }

        public async Task StartAsync()
        {
            if (IsRunning())
            {
                return;
            }

            var oldState = _globalStateManager.GlobalState;
            oldState.ObsState.State = ObsStateType.Opening;
            oldState.ObsState.ErrorMessages.Clear();

            await _globalStateManager.UpdateState(oldState);

            ProcessStartInfo proc = new ProcessStartInfo();
            proc.FileName = @"C:\windows\system32\cmd.exe";
            //TODO: Add path to appsettings.json
            proc.Arguments = "/c start /d \"C:\\Program Files\\obs-studio\\bin\\64bit\" obs64.exe";
            Process.Start(proc);
           
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
                return;
            }
            catch (ErrorResponseException ex)
            {
                oldState = _globalStateManager.GlobalState;
                oldState.ObsState.State = ObsStateType.Aborted;
                oldState.ObsState.ErrorMessages.Add("Error trying connect to obs websockets.");

                return;
            }
        }

        public async Task CloseAsync(bool HasCustomState)
        {
            if (!IsRunning())
            {
                return;
            }

            ObsScreenshotTaskCancellationToken.Cancel();

            if (!HasCustomState)
            {
                var oldState = _globalStateManager.GlobalState;
                oldState.ObsState.State = ObsStateType.Closing;
                oldState.ObsState.ErrorMessages.Clear();

                await _globalStateManager.UpdateState(oldState);
            }

            Process.GetProcessesByName("obs64").FirstOrDefault()?.Kill();
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
            _obs.SetCurrentScene(scene);
        }

        public void SetPreviewSceneByName(string scene)
        {
            _obs.SetPreviewScene(scene);
        }

        private bool IsRunning()
        {
            return Process.GetProcessesByName("obs64").Any();
        }

        private void onConnected(object sender, EventArgs e)
        {
            var oldState = _globalStateManager.GlobalState;
            oldState.ObsState.CurrenteScene = _obs.GetCurrentScene().Name;
            oldState.ObsState.PreviewScene = _obs.GetPreviewScene().Name;

            _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();

            ObsScreenshotTaskCancellationToken = new CancellationTokenSource();
            var token = ObsScreenshotTaskCancellationToken.Token;

            var task = Task.Factory.StartNew(() =>
            {
                Thread.CurrentThread.IsBackground = true;

                while (true)
                {
                    if (token.IsCancellationRequested)
                    {
                        break;
                    }

                    Thread.Sleep(500);

                    if (IsRunning())
                    {
                        try
                        {
                            _notificationHandler.SendNotificationToWebSocketPreviewAll(
                                new
                                {
                                    PreviewScene = _obs.TakeSourceScreenshot(_globalStateManager.GlobalState.ObsState.PreviewScene, "jpeg", null)
                                        .ImageData,
                                    CurrentScene = _obs.TakeSourceScreenshot(_globalStateManager.GlobalState.ObsState.CurrenteScene, "jpeg", null)
                                        .ImageData
                                }

                           ).GetAwaiter().GetResult();
                        }
                        catch (Exception ex)
                        {
                        }
                    
                    }
                }
            }, token);
        }

        private void onDisconnect(object sender, EventArgs e)
        {
            var oldState = _globalStateManager.GlobalState;
            oldState.ObsState.State = ObsStateType.Closed;
            oldState.ObsState.ErrorMessages.Clear();

            _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();
        }

        private void onStreamingStateChange(OBSWebsocket sender, OutputState newState)
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

        private void onSceneChange(OBSWebsocket sender, string newSceneName)
        {
            var oldState = _globalStateManager.GlobalState;
            oldState.ObsState.CurrenteScene = newSceneName;

            _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();
        }

        private void onPreviewSceneChanged(OBSWebsocket sender, string newSceneName)
        {
            var oldState = _globalStateManager.GlobalState;
            oldState.ObsState.PreviewScene = newSceneName;

            _globalStateManager.UpdateState(oldState).GetAwaiter().GetResult();
        }
    }
}
