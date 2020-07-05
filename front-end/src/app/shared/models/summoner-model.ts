import MatchModel from './match-model';

export default class SummonerModel {
    accountId: string;
    id: number;
    name: string;
    profileIconId: number;
    puuid: string;
    revisionDate: number;
    summonerLevel: number;
    matches: MatchModel[];
}
