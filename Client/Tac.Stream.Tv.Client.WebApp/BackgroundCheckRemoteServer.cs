using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;

namespace Tac.Stream.Tv.Client.WebApp
{
    public class BackgroundCheckRemoteServer : IHostedService, IDisposable
    {
        private static readonly HttpClient client = new HttpClient();
        private readonly ILogger<BackgroundCheckRemoteServer> _logger;
        private readonly GlobalStateManager _globalStateManager;
        private readonly RemoteServerConfiguration _remoteServerConfiguration;
        private Timer timer;

        public BackgroundCheckRemoteServer(
            GlobalStateManager globalStateManager,
            ILogger<BackgroundCheckRemoteServer> logger, 
            IOptions<RemoteServerConfiguration> remoteServerOptions)
        {
            _globalStateManager = globalStateManager;
            _logger = logger;
            _remoteServerConfiguration = remoteServerOptions.Value;
        }

        public void Dispose()
        {
            timer?.Dispose();
        }

        public Task StartAsync(CancellationToken cancellationToken)
        {
            timer = new Timer(o => {
                var state = _globalStateManager.GlobalState;

                try
                {
                    var response = client.GetAsync(_remoteServerConfiguration.RemoteServerBaseAddress + "/api/machine-manager/isOn").GetAwaiter().GetResult();
                    state.RemoteServerState = RemoteServerStateTypeModel.On;
                }
                catch (Exception ex)
                {
                    state.RemoteServerState = RemoteServerStateTypeModel.Off;
                }

                _globalStateManager.UpdateState(state).GetAwaiter().GetResult();
            },
            null,
            TimeSpan.Zero,
            TimeSpan.FromSeconds(4));

            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            return Task.CompletedTask;
        }
    }
}
