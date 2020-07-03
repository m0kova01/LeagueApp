import StatsModel from './stasts-model';
import ParticipantModel from './participant-model';
import { ChampionModel } from './champion-model';
import TeamModel from './team-model';

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
    gameCreation: number;
    gameDuration: number;
    gameMode: string;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participantIdentities: any;
    queueId: number;
    seasonId: number;
    teams: TeamModel[];
}
