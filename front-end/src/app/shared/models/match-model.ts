import StatsModel from './stasts-model';
import ParticipantModel from './participant-model';

export default class MatchModel {
    champion: number;
    gameId: number;
    lane: string;
    platformId: string;
    queue: number;
    role: string;
    season: number;
    timestamp: number;
    championName: string;
    stats: StatsModel;
    participants: ParticipantModel[];
}
