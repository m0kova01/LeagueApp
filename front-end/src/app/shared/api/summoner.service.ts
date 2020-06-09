import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export default class SummonerService {
    public API = 'http://localhost:8080/api';
    public SUMMONER_API = `${this.API}/summoner`;
    constructor(private http: HttpClient) { }



    getSummoner(summonerName: string) {
        return this.http.get(`${this.SUMMONER_API}/${summonerName}`);
    }
}
