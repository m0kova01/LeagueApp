using System.Collections.Generic;

namespace LeagueAppAPI.Models
{
    public class SummonerModel
    {
        public string AccountId { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public string ProfileIconId { get; set; }
        public string Puuid { get; set; }
        public string RevisionDate { get; set; }
        public string SummonerLevel { get; set; }
        public List<MatchModel> Matches { get; set; }
    }
}
