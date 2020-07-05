using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace LeagueAppAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MatchController : ControllerBase
    {
        static HttpClient client = new HttpClient();

        [HttpGet("GetMatchDetails")]
        public async Task<ActionResult<ExpandoObject>> GetMatchDetails([FromQuery] string gameID)
        {
            ExpandoObject matchDetails = null;

            HttpResponseMessage response = await client.GetAsync(Global.Global.BASE_URL + "/lol/match/v4/matches/" + gameID + "?api_key=" + Global.Global.API_KEY);
            if (response.IsSuccessStatusCode)
            {
                var data = await response.Content.ReadAsAsync<ExpandoObject>();
                matchDetails = data;
            }
            return matchDetails;
        }

    }
}
