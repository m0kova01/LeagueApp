import StatsModel from './stasts-model';

export default class ParticipantModel {
    participantId: number;
    summonerName: string;
    profileIcon: number;
    championID: number;
    teamId: number;
    stats: StatsModel;
    spell1Id: number;
    spell1IdString: string;
    spell2Id: number;
    spell2IdString: string;
    timeline: any;
}
