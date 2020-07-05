using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeagueAppAPI.Models
{
    public class MatchlistDto
    {
        public int startIndex { get; set; }
        public int totalGames { get; set; }
        public int endIndex { get; set; }
        public MatchReferenceDto matches { get; set; }
    }
}
