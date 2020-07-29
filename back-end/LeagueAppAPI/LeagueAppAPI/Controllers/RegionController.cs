using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LeagueAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegionController : ControllerBase
    {
        [HttpPost("SetRegion")]
        public ExpandoObject SetRegion([FromBody] string region)
        {
            dynamic obj = new ExpandoObject();

            string shortRegion;

            switch (region)
            {
                case "North America":
                    Global.Global.BASE_URL = "https://na1.api.riotgames.com";
                    shortRegion = "NA1";
                    break;
                case "Europe Nordic & East":
                    Global.Global.BASE_URL = "https://eun1.api.riotgames.com";
                    shortRegion = "EUN1";
                    break;
                case "LAN":
                    Global.Global.BASE_URL = "https://la1.api.riotgames.com";
                    shortRegion = "LA1";
                    break;
                case "Korea":
                    Global.Global.BASE_URL = "https://kr.api.riotgames.com";
                    shortRegion = "KR";
                    break;
                case "Oceania":
                    Global.Global.BASE_URL = "https://oc1.api.riotgames.com";
                    shortRegion = "OC1";
                    break;
                case "Russia":
                    Global.Global.BASE_URL = "https://ru.api.riotgames.com";
                    shortRegion = "RU";
                    break;
                case "Japan":
                    Global.Global.BASE_URL = "https://jp1.api.riotgames.com";
                    shortRegion = "JP1";
                    break;
                case "Brazil":
                    Global.Global.BASE_URL = "https://br1.api.riotgames.com";
                    shortRegion = "BR1";
                    break;
                case "Turkey":
                    Global.Global.BASE_URL = "https://tr1.api.riotgames.com";
                    shortRegion = "TR1";
                    break;
                case "Europe West":
                    Global.Global.BASE_URL = "https://euw1.api.riotgames.com";
                    shortRegion = "EUW1";
                    break;
                case "LAS":
                    Global.Global.BASE_URL = "https://la2.api.riotgames.com";
                    shortRegion = "LA2";
                    break;
                default:
                    shortRegion = "Error setting region";
                    break;
            }
            obj.ShortRegion = shortRegion;

            return obj;
        }

        [HttpGet("GetShortRegion")]
        public string GetShortRegion([FromQuery] string gameID)
        {
            switch (Global.Global.BASE_URL)
            {
                case "https://na1.api.riotgames.com":
                    return "NA1";
                case "https://eun1.api.riotgames.com":
                    return "EUN1";
                case "https://la1.api.riotgames.com":
                    return "LA1";
                case "https://kr.api.riotgames.com":
                    return "KR";
                case "https://oc1.api.riotgames.com":
                    return "OC1";
                case "https://ru.api.riotgames.com":
                    return "RU";
                case "https://jp1.api.riotgames.com":
                    return "JP1";
                case "https://br1.api.riotgames.com":
                    return "BR1";
                case "https://tr1.api.riotgames.com":
                    return "TR1";
                case "https://euw1.api.riotgames.com":
                    return "EUW1";
                case "https://la2.api.riotgames.com":
                    return "LA2";
                default:
                    return "Error fetching region";
            }
        }
       }
}
