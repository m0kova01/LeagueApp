import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SummonerModel from '../models/summoner-model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export default class SummonerService {
    API_KEY = 'RGAPI-efe60032-6763-4e11-8839-a560e5e8732d'; // key runs out every 24 hours, must be replaced
    BASE_URL = 'https://na1.api.riotgames.com';

    summoner: SummonerModel;
    summonerChange: Subject<SummonerModel> = new Subject<SummonerModel>()

    constructor(private http: HttpClient) { }
    responseStatus: number;

    getSummoner(summonerName: string): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get(this.BASE_URL + '/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + this.API_KEY);
    }

    getMatchHistory(accountID: number): any {
        // tslint:disable-next-line: max-line-length
        console.log(this.http.get(this.BASE_URL + '/lol/match/v4/matchlists/by-account/' + accountID + '?api_key=' + this.API_KEY));
        return this.http.get(this.BASE_URL + '/lol/match/v4/matchlists/by-account/' + accountID + '?api_key=' + this.API_KEY);
    }

    loadChampionDetails(): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json?api_key=' + this.API_KEY);
    }

    changeSummoner(summoner: SummonerModel): any {
        this.summoner = summoner;
        this.summonerChange.next(this.summoner);
    }
}
