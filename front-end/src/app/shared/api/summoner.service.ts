import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SummonerModel from '../models/summoner-model';
import { BehaviorSubject } from 'rxjs';
import * as global from '../data/global';
import { RegionService } from './region.service';

@Injectable({
    providedIn: 'root'
})
export default class SummonerService {

    private summoner = new BehaviorSubject(new SummonerModel());
    currentSummoner = this.summoner.asObservable();

    constructor(private http: HttpClient, private region: RegionService) { }

    getSummoner(summonerName: string): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get(this.region.BASE_URL + '/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + global.API_KEY);
    }

    getMatchHistory(accountID: number): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get(this.region.BASE_URL + '/lol/match/v4/matchlists/by-account/' + accountID + '?api_key=' + global.API_KEY);
    }

    loadChampionDetails(): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json?api_key=' + global.API_KEY);
    }

    changeSummoner(summoner: SummonerModel): any {
        this.summoner.next(summoner);
    }
}
