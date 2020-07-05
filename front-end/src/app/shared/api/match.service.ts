import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../data/global';
import { BehaviorSubject } from 'rxjs';
import MatchModel from '../models/match-model';
import { RegionService } from './region.service';
import { Global } from '../data/global';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private match = new BehaviorSubject(new MatchModel());
  currentMatch = this.match.asObservable();

  constructor(private http: HttpClient, private region: RegionService) { }

  getMatchDetails(gameID: string): any {
    return this.http.get(Global.API_ENDPOINTS.MATCH + 'GetMatchDetails', {
      params: {
        gameID
      }
    });
  }

  changeMatch(match: MatchModel): any {
    this.match.next(match);
  }

}
