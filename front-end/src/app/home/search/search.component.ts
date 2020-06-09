import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import SummonerService from 'src/app/shared/api/summoner.service';
import SummonerModel from 'src/app/shared/models/summoner-model';

@Component({
  selector: 'app-summoner-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() notify: EventEmitter<SummonerModel> = new EventEmitter<SummonerModel>();
  summonerName: string;

  constructor(private summonerService: SummonerService) { }

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

    this.notify.emit(summoner);
  }
}
