import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegionService {
  BASE_URL = 'https://na1.api.riotgames.com';

  constructor() { }

  getShortRegion(): string {
    switch (this.BASE_URL) {
      case 'https://na1.api.riotgames.com':
        return 'NA1';
      case 'https://eun1.api.riotgames.com':
        return 'EUN1';
      case 'https://la1.api.riotgames.com':
        return 'LA1';
      case 'https://kr.api.riotgames.com':
        return 'KR';
      case 'https://oc1.api.riotgames.com':
        return 'OC1';
      case 'https://ru.api.riotgames.com':
        return 'RU';
      case 'https://jp1.api.riotgames.com':
        return 'JP1';
      case 'https://br1.api.riotgames.com':
        return 'BR1';
      case 'https://tr1.api.riotgames.com':
        return 'TR1';
      case 'https://euw1.api.riotgames.com':
        return 'EUW1';
      case 'https://la2.api.riotgames.com':
        return 'LA2';
      default:
        return;
    }

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

  setRegion(region: string): string {
    switch (region) {
      case 'North America':
        this.BASE_URL = 'https://na1.api.riotgames.com';
        return 'NA1';
      case 'Europe Nordic & East':
        this.BASE_URL = 'https://eun1.api.riotgames.com';
        return 'EUN1';
        break;
      case 'LAN':
        this.BASE_URL = 'https://la1.api.riotgames.com';
        return 'LA1';
        break;
      case 'Korea':
        this.BASE_URL = 'https://kr.api.riotgames.com';
        return 'KR';
        break;
      case 'Oceania':
        this.BASE_URL = 'https://oc1.api.riotgames.com';
        return 'OC1';
        break;
      case 'Russia':
        this.BASE_URL = 'https://ru.api.riotgames.com';
        return 'RU';
        break;
      case 'Japan':
        this.BASE_URL = 'https://jp1.api.riotgames.com';
        return 'JP1';
        break;
      case 'Brazil':
        this.BASE_URL = 'https://br1.api.riotgames.com';
        return 'BR1';
        break;
      case 'Turkey':
        this.BASE_URL = 'https://tr1.api.riotgames.com';
        return 'TR1';
        break;
      case 'Europe West':
        this.BASE_URL = 'https://euw1.api.riotgames.com';
        return 'EUW1';
        break;
      case 'LAS':
        this.BASE_URL = 'https://la2.api.riotgames.com';
        return 'LA2';
        break;
      default:
        return;
    }
  }
}
