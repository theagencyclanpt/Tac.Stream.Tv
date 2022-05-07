using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.SignalR.Client;
using System;
using System.Diagnostics;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using System.Threading;
using Microsoft.Extensions.Configuration;
using Serilog;

namespace Tac.Stream.Tv.Server.WebApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json", optional: false)
                .Build();

            NotificationMachineUp(config).ConfigureAwait(false);
            CreateHostBuilder(config, args).Build().Run();
        }

        public async static Task NotificationMachineUp(IConfigurationRoot config)
        {
            var kastrApiBaseAddress = config.GetSection("KastrApiBaseAddress").Value;
            var machineId = config.GetSection("MachineId").Value;

            if (kastrApiBaseAddress == null || String.IsNullOrEmpty(kastrApiBaseAddress))
                throw new Exception("Invalid kastr api address");   
            
            if (machineId == null || String.IsNullOrEmpty(machineId))
                throw new Exception("Invalid machine Id");

            var uri = kastrApiBaseAddress  + "/machineHub";

            await using var connection = new HubConnectionBuilder().WithUrl(uri).Build();
            
            try
            {
                await connection.StartAsync();
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                Program.ExitProgramOrShutdownMachine(config);
            }
            
            while (true)
            {
                try
                {
                    await connection.InvokeAsync(
                        "Up", 
                        JsonSerializer.Serialize(
                            new MachineSync()
                            {
                                Date = DateTimeOffset.UtcNow,
                                MachineId = machineId
                            }
                        ));
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);

                    Program.ExitProgramOrShutdownMachine(config);
                }
                
                await Task.Delay(1000);
            }
        }

        public static IHostBuilder CreateHostBuilder(IConfigurationRoot config, string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog()
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>().UseUrls(
                        config.GetSection("Url").Value);
                });

        private static void ExitProgramOrShutdownMachine(IConfigurationRoot config)
        {
            var turnOffMachine = config.GetSection("TurnOffMachineIfError").Value;
            if (turnOffMachine != null && Boolean.Parse(turnOffMachine))
            {
                Console.WriteLine("Machine will shutdown in 2 seconds");
                Task.Delay(2000).Wait();
                Process.Start("shutdown", "/s /f /t 00");
            }
            
            Console.WriteLine("Program will exit in 5 seconds");
            Task.Delay(5000).Wait();

            System.Environment.Exit(-1);
        }
    }
    
    public class MachineSync
    {
        public string MachineId { get; set; }

        public DateTimeOffset? Date { get; set; }
    }
}
