using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using Kastr.Stream.Wizard.Shared.Notifications;
using Kastr.Stream.Wizard.WebApp.Huds;

namespace Kastr.Stream.Wizard.WebApp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddOptions();

            services.Configure<RemoteServerConfiguration>(Configuration.GetSection("MachineConfiguration"));
            
            services.AddSingleton<NotificationHandler>();
            services.AddSingleton<GlobalStateManager>();

            services.AddCors();

            services.AddControllers()
                .AddMvcOptions(x =>
                {
                    x.EnableEndpointRouting = true;
                });

            services.AddSignalR();
            services.AddRouting();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseWebSockets();

            app.UseCors(options => options.AllowAnyOrigin());

            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();

                endpoints.MapFallbackToFile(
                    "{**route}",
                    "index.html");

                endpoints.MapHub<MachineHud>("/machineHub");
                endpoints.MapHub<NotificationsHub>("/notificationHub");
            });
        }
    }
}
