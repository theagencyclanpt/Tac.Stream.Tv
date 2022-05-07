using System;
using System.Text.Json;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace Tac.Stream.Tv.Client.WebApp.Huds
{
    public class MachineHud : Hub
    {
        public MachineHud(IHubContext<MachineHud> hubContext, 
            GlobalStateManager globalStateManager, 
            ILogger<MachineHud> logger)
        {
            HubContext = hubContext;
            _globalStateManager = globalStateManager;
            _logger = logger;
        }

        private IHubContext<MachineHud> HubContext;
        private readonly GlobalStateManager _globalStateManager;
        private readonly ILogger<MachineHud> _logger;

        public override async Task OnConnectedAsync()
        {
            Console.WriteLine($"Connected machine");
            
            _globalStateManager.GlobalState.LastSyncDate = DateTimeOffset.Now;
            _globalStateManager.GlobalState.RemoteServerState = RemoteServerStateTypeModel.On;
            await _globalStateManager.UpdateStateAsync();
        }

        public override async Task OnDisconnectedAsync(Exception exception)
        {
            Console.WriteLine($"Disconnected machine");

             _globalStateManager.GlobalState.RemoteServerState = RemoteServerStateTypeModel.Off;
             _globalStateManager.GlobalState.LastSyncDate = DateTimeOffset.Now;
            await _globalStateManager.UpdateStateAsync();
        }

        public async Task Up(string parameter)
        {
            var machineSync = JsonSerializer.Deserialize<MachineSync>(parameter);
            if (machineSync != null)
            {
                _globalStateManager.GlobalState.LastSyncDate = machineSync.Date;
                _globalStateManager.GlobalState.RemoteServerState = RemoteServerStateTypeModel.On;
                
                await _globalStateManager.UpdateStateAsync();

                _logger.LogInformation($"Machine Id: {machineSync.MachineId} | Last Sync Date: {machineSync.Date}");
            }
        }
    }
    
    public class MachineSync
    {
        public string MachineId { get; set; }
        public DateTimeOffset? Date { get; set; }
    }
}