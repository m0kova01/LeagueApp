import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import SummonerModel from '../models/summoner-model';
import { BehaviorSubject } from 'rxjs';
import * as global from '../data/global';
import { Global } from '../data/global';
import { RegionService } from './region.service';

@Injectable({
    providedIn: 'root'
})
export class SummonerService {
    private summoner = new BehaviorSubject(new SummonerModel());
    currentSummoner = this.summoner.asObservable();

    constructor(private http: HttpClient, private region: RegionService) { }

    getSummoner(summonerName: string): any {
        return this.http.get(Global.API_ENDPOINTS.SUMMONER + 'GetSummoner', {
            params: {
              summonerName
            }
        });
    }

    getMatchHistory(accountID: string): any {
        return this.http.get(Global.API_ENDPOINTS.SUMMONER + 'GetMatchHistory', {
            params: {
                accountID
            }
        });
    }

    loadChampionDetails(): any {
        // tslint:disable-next-line: max-line-length
        return this.http.get('http://ddragon.leagueoflegends.com/cdn/10.11.1/data/en_US/champion.json?api_key=' + global.API_KEY);
    }

    changeSummoner(summoner: SummonerModel): any {
        this.summoner.next(summoner);
    }
}
