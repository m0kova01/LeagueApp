import StatsModel from './stasts-model';

export default class ParticipantModel {
    participantID: number;
    summonerName: string;
    championID: number;
    teamID: number;
    stats: StatsModel;
    spell1Id: number;
    spell1IdString: string;
    spell2Id: number;
    spell2IdString: string
    teamId: number;
}
