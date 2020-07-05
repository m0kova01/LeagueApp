using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using LeagueAppAPI.Models;
using System.Net.Http;
using Newtonsoft.Json;
using System.Net;
using System.IO;
using System.Text;
using System.Dynamic;
using System.Web.Http.Results;

namespace LeagueAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SummonerController : ControllerBase
    {
        static HttpClient client = new HttpClient();

        [HttpGet("GetSummoner")]
        public async Task<ActionResult<SummonerModel>> GetSummoner([FromQuery] string summonerName)
        {
            SummonerModel summoner = null;
            HttpResponseMessage response = await client.GetAsync(Global.Global.BASE_URL + "/lol/summoner/v4/summoners/by-name/" + summonerName + "?api_key=" + Global.Global.API_KEY);
            if (response.IsSuccessStatusCode)
            {
                summoner = await response.Content.ReadAsAsync<SummonerModel>();
            }
            return summoner;
        }

        [HttpGet("GetMatchHistory")]
        public async Task<ActionResult<ExpandoObject>> GetMatchHistory([FromQuery] string accountID)
        {
            ExpandoObject matchHistory = null;

            HttpResponseMessage response = await client.GetAsync(Global.Global.BASE_URL + "/lol/match/v4/matchlists/by-account/" + accountID + "?api_key=" + Global.Global.API_KEY);
            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsAsync<ExpandoObject>();
                matchHistory = data;
            }
            return matchHistory;
        }
    }
}
