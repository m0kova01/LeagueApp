import { Component, OnInit } from '@angular/core';
import SummonerModel from '../../../shared/models/summoner-model';
import SummonerService from 'src/app/shared/api/summoner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  summoner: SummonerModel;
  summonerName: string;

  constructor(private summonerService: SummonerService, private router: Router) { }

  ngOnInit(): void {
  }

  lookupSummoner(): void {
    this.summonerService.getSummoner(this.summonerName).subscribe((response) => this.handleResponse(response));
  }

  handleResponse(response: any): void {
    const summoner = new SummonerModel();

    summoner.accountId = response.accountId;
    summoner.id = response.id;
    summoner.name = response.name;
    summoner.profileIconId = response.profileIconId;
    summoner.puuid = response.puuid;
    summoner.revisionDate = response.revisionDate;
    summoner.summonerLevel = response.summonerLevel;

    this.router.navigate(['/home/details'], {state: {data: summoner}});
  }
  handleSummoner(summoner: SummonerModel): void {
    this.summoner = summoner;
  }

}
