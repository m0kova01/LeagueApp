using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace LeagueAppAPI
{
    public class WebApiConfig
    {
            public static void Register(HttpConfiguration config)
            {
                // Web API configuration and services

                // Web API routes
                config.MapHttpAttributeRoutes();

                // Controllers with Actions
                // To handle routes like `/api/VTRouting/route`
                config.Routes.MapHttpRoute(
                    name: "ControllerAndAction",
                    routeTemplate: "api/{controller}/{action}"
                );
            }
    }
}
