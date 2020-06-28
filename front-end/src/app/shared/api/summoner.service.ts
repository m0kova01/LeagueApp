import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SummonerModel from '../models/summoner-model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class SummonerService {
    API_KEY = 'RGAPI-fe73651b-8f28-4ac9-a702-557ba79874b5'; // key runs out every 24 hours, must be replaced
    BASE_URL = 'https://na1.api.riotgames.com';

    private summoner = new BehaviorSubject(new SummonerModel());
    currentSummoner = this.summoner.asObservable();


    constructor(private http: HttpClient) { }
    responseStatus: number;

    getSummoner(summonerName: string): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get(this.BASE_URL + '/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + this.API_KEY);
    }

    getMatchHistory(accountID: number): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get(this.BASE_URL + '/lol/match/v4/matchlists/by-account/' + accountID + '?api_key=' + this.API_KEY);
    }

    loadChampionDetails(): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json?api_key=' + this.API_KEY);
    }

    changeSummoner(summoner: SummonerModel): any {
        this.summoner.next(summoner);
    }

    getMatchDetails(gameID: number): any {
        return this.http.get(this.BASE_URL + '/lol/match/v4/matches/' + gameID + '?api_key=' + this.API_KEY);
    }
}
