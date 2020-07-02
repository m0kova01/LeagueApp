import StatsModel from './stasts-model';
import ParticipantModel from './participant-model';
import { ChampionModel } from './champion-model';

export default class MatchModel {
    champion: number;
    championModel: ChampionModel;
    gameId: number;
    lane: string;
    platformId: string;
    queue: number;
    role: string;
    season: number;
    timestamp: number;
    stats: StatsModel;
    participants: ParticipantModel[];
}
