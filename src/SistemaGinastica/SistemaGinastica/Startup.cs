using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using SistemaGinastica.DomainModel.Authorization;
using SistemaGinastica.DataAccess.Entities;
using SistemaGinastica.DomainModel;
using SistemaGinastica.Service.Entities;
using System;
using Microsoft.EntityFrameworkCore;

namespace SistemaGinastica
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });
            services.AddHttpContextAccessor();
            services.AddDbContext<ApplicationContext>();

            services.AddScoped<CustomerService>();
            services.AddScoped<GroupClassService>();
            services.AddScoped<InstructorService>();
            services.AddScoped<PaymentService>();
            services.AddScoped<PhysicalEvaluationService>();
            services.AddScoped<PresenceService>();
            services.AddScoped<UserService>();
            services.AddScoped<VacationService>();
            services.AddScoped<MockService>();

            services.AddScoped<CustomerDataAccess>();
            services.AddScoped<GroupClassDataAccess>();
            services.AddScoped<InstructorDataAccess>();
            services.AddScoped<PaymentDataAccess>();
            services.AddScoped<PhysicalEvaluationDataAccess>();
            services.AddScoped<PresenceDataAccess>();
            services.AddScoped<UserDataAccess>();
            services.AddScoped<VacationDataAccess>();

            

            AuthorizationProvider.Configure(services);
            ApplicationEnv.ServiceProvider = services.BuildServiceProvider();

            if (ApplicationEnv.GetBoolConfiguration(Constants.RUN_MIGRATIONS) 
                && !ApplicationEnv.GetBoolConfiguration(Constants.USE_MEMORY_DB))
            {
                ((ApplicationContext)Activator.CreateInstance(typeof(ApplicationContext))).Database.Migrate();  
            }

            MockService mockService = ApplicationEnv.ServiceProvider.GetService<MockService>();
            mockService.AdminUser();

            if (ApplicationEnv.GetBoolConfiguration(Constants.RUN_START_TASK))
            {
                mockService.Mock();
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            //app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
