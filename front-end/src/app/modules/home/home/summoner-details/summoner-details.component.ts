import { Component, OnInit, Input, OnChanges } from '@angular/core';
import SummonerModel from 'src/app/shared/models/summoner-model';
import SummonerService from 'src/app/shared/api/summoner.service';
import MatchModel from 'src/app/shared/models/match-model';
import { ChampionShortModel } from 'src/app/shared/models/champion-short-model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/api/error.service';

@Component({
  selector: 'app-summoner-details',
  templateUrl: './summoner-details.component.html',
  styleUrls: ['./summoner-details.component.scss']
})
export class SummonerDetailsComponent implements OnInit {
  summoner: SummonerModel;
  matches: MatchModel[] = [];
  champions: any[] = [];
  state$: Observable<object>;

  constructor(public activatedRoute: ActivatedRoute, private summonerService: SummonerService, private errorService: ErrorService) { }

  // ngOnChanges(): void {
  //   this.summoner = this.summonerService.summoner;
  //   this._subscription = this.summonerService.summonerChange.subscribe((value) => {
  //     this.summoner = value;
  //     this.loadChampionDetails();
  //   });
  //   this.loadChampionDetails();
  // }

  ngOnInit(): void {
    this.summonerService.currentSummoner.subscribe(summoner => {
      this.summoner = summoner;
      this.loadChampionDetails();
    });
  }

  loadChampionDetails(): void {
    this.summonerService.loadChampionDetails().subscribe(response => { this.handleChampDetail(response); },
      error => {
        this.errorService.DisplayError('Summoner not found!');
      });
  }

  handleChampDetail(response): void {
    if (response.data) {
      this.champions = Object.keys(response.data).map(e => response.data[e]);
    }

    this.loadMatchHistory();
  }

  loadMatchHistory(): void {
    this.summonerService.getMatchHistory(this.summoner.accountId).subscribe((response) => this.handleMatchHistory(response));
  }

  handleMatchHistory(response): void {
    if (response.matches) {
      this.matches = Array.isArray(response.matches) ? response.matches : [response.matches];
      this.matches = this.matches.slice(0, 10); // only lookup past 10 games because of api key limit
    }

    this.findChampNames();
  }

  findChampNames(): void {
    this.matches.forEach(match => {
      this.champions.forEach(champion => {
        if (+match.champion === +champion.key) {
          match.championName = champion.id;
        }
      });
    });
  }
}
