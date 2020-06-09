import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export default class SummonerService {
    API_KEY = 'RGAPI-6bb5459d-0f9c-4294-875f-8263e10fd6aa'; // key runs out every 24 hours, must be replaced
    constructor(private http: HttpClient) { }
    responseStatus: number;

    getSummoner(summonerName: string): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + summonerName + '?api_key=' + this.API_KEY);
    }

    getMatchHistory(accountID: number): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get('https://na1.api.riotgames.com/lol/match/v4/matchlists/by-account/' + accountID + '?api_key=' + this.API_KEY);
    }

    loadChampionDetails(): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json?api_key=' + this.API_KEY);
    }
}
