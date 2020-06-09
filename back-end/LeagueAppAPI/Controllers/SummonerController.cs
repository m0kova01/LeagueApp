using LeagueAppAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace LeagueAppAPI.Controllers
{
    public class SummonerController : ApiController
    {
        static HttpClient client = new HttpClient();
        // GET api/summoner
        public async System.Threading.Tasks.Task<SummonerModel> GetSummonerInfoAsync(string summonerName)
        {
            client.BaseAddress = new Uri("https://americas.api.riotgames.com");
            SummonerModel summoner = null;

            string api = $"/lol/summoner/v4/summoners/by-name/{summonerName}";
            HttpResponseMessage response = await client.GetAsync(api);

            if (response.IsSuccessStatusCode)
            {
                summoner = await response.Content.ReadAsAsync<SummonerModel>();
            }

            return summoner;
        }

    }
}