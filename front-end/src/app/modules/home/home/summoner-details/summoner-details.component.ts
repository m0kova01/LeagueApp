import { Component, OnInit, Input, OnChanges } from '@angular/core';
import SummonerModel from 'src/app/shared/models/summoner-model';
import SummonerService from 'src/app/shared/api/summoner.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  loaded = false;

  constructor(private router: Router, public activatedRoute: ActivatedRoute, private summonerService: SummonerService, private errorService: ErrorService) { }

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
        this.router.navigate(['/home/search']);
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
        this.router.navigate(['/home/search']);
      });
  }

  handleMatchHistory(response): void {
    if (response.matches) {
      this.summoner.matches = Array.isArray(response.matches) ? response.matches : [response.matches];
      this.summoner.matches = this.summoner.matches.slice(0, 10); // only lookup past 10 games because of api key limit
    } else
      this.summoner.matches = []

    this.findChampNames();

    this.loaded = true;
  }

  findChampNames(): void {
    this.summoner.matches.forEach(match => {
      // match.stats =  this.loadMatchDetails(match.gameId)
      this.champions.forEach(champion => {
        if (+match.champion === +champion.key) {
          match.championModel = champion;
          return;
        }
      });
    });
  }

}
