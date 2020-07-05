
namespace LeagueAppAPI.Models
{
    public class MatchModel
    {
        public long gameId { get; set; }
        public int champion { get; set; }
        // championModel: ChampionModel;
        public string lane { get; set; }
        public string platformId { get; set; }
        public int queue { get; set; }
        public string role { get; set; }
        public int season { get; set; }
        public long timestamp { get; set; }
        // stats: StatsModel;
        // participants: ParticipantModel[];
        public int gameCreation { get; set; }
        public int gameDuration { get; set; }
        public string gameMode { get; set; }
        public string gameType { get; set; }
        public string gameVersion { get; set; }
        public int mapId { get; set; }
        // participantIdentities: any;
        public int queueId { get; set; }
        public int seasonId { get; set; }
        // teams: TeamModel[];
    }
}
