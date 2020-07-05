import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Global } from '../data/global';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  BASE_URL = 'https://na1.api.riotgames.com';

  constructor(private http: HttpClient) { }

  getShortRegion(): Observable<string> {
    return this.http.get(Global.API_ENDPOINTS.REGION + 'GetShortRegion', { responseType: 'text' });
  }

  getLongRegion(shortRegion: string): string {
    switch (shortRegion) {
      case 'NA1':
        return 'North America';
      case 'EUN1':
        return 'Europe Nordic & East';
      case 'LA1':
        return 'LAN';
      case 'KR':
        return 'Korea';
      case 'OC1':
        return 'Oceania';
      case 'RU':
        return 'Russia';
      case 'JP1':
        return 'Japan';
      case 'BR1':
        return 'Brazil';
      case 'TR1':
        return 'Turkey';
      case 'EUW1':
        return 'Europe West';
      case 'LA2':
        return 'LAS';
      default:
        return;
    }
  }

  setRegion(region: string): any {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers };
    return this.http.post(Global.API_ENDPOINTS.REGION + 'SetRegion', JSON.stringify(region), options);
  }
}
