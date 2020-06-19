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
  champions: any[] = [];
  state$: Observable<object>;

  constructor(public activatedRoute: ActivatedRoute, private summonerService: SummonerService, private errorService: ErrorService) { }

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
    this.summonerService.getMatchHistory(this.summoner.accountId).subscribe(response => { this.handleMatchHistory(response); },
      error => {
        this.errorService.DisplayError('Error loading matches!');
      });
  }

  handleMatchHistory(response): void {
    if (response.matches) {
      this.summoner.matches = Array.isArray(response.matches) ? response.matches : [response.matches];
      this.summoner.matches = this.summoner.matches.slice(0, 10); // only lookup past 10 games because of api key limit
    } else
      this.summoner.matches = []

    this.findChampNames();
  }

  findChampNames(): void {
    this.summoner.matches.forEach(match => {
      this.loadMatchDetails(match.gameId)
      this.champions.forEach(champion => {
        if (+match.champion === +champion.key) {
          match.championName = champion.id;
        }
      });
    });
  }

  loadMatchDetails(gameID: number): void {
    this.summonerService.getMatchDetails(gameID).subscribe(response => { console.log(response); this.handleMatchDetails(response) },
      error => {
        this.errorService.DisplayError('Error loading match details!');
      });
  }

  handleMatchDetails(result): void {
    let participantID: number;
    for (let i = 0; i < result.participantIdentities.length; i++){
      if (result.participantIdentities[i].player.summonerName === this.summoner.name) {
        participantID = result.participantIdentities[i].participantId;
        break;
      }
    }

    for (let i = 0; i < result.participants.length; i++) {
      if (result.particpants[i].participantId === participantID) {
        
      }
    }

  }
}
