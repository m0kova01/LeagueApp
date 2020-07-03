import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as global from '../data/global';
import { RegionService } from './region.service';
import { BehaviorSubject } from 'rxjs';
import MatchModel from '../models/match-model';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  private match = new BehaviorSubject(new MatchModel());
  currentMatch = this.match.asObservable();

  constructor(private http: HttpClient, private region: RegionService) { }

  getMatchDetails(gameID: number): any {
    return this.http.get(this.region.BASE_URL + '/lol/match/v4/matches/' + gameID + '?api_key=' + global.API_KEY);
  }

  changeMatch(match: MatchModel): any {
    this.match.next(match);
  }

}
