import StatsModel from './stasts-model';

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
}
