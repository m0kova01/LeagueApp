import { Component, OnInit } from '@angular/core';
import SummonerModel from '../../../shared/models/summoner-model';
import SummonerService from 'src/app/shared/api/summoner.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegionSelectComponent } from 'src/app/shared/components/region-select/region-select.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  summoner: SummonerModel;
  region = 'NA1';
  summonerName: string;

  constructor(public dialog: MatDialog, private summonerService: SummonerService, private router: Router) { }

  ngOnInit(): void {
    this.setRegion();
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

    this.router.navigate(['/home/details'], { state: { data: summoner } });
  }
  handleSummoner(summoner: SummonerModel): void {
    this.summoner = summoner;
  }

  changeRegion(): void {
    const dialogRef = this.dialog.open(RegionSelectComponent);

    dialogRef.componentInstance.region = this.region;

    dialogRef.afterClosed().subscribe(result => {
      this.region = result;
    });
  }

  setRegion(): void {
    switch (this.summonerService.BASE_URL) {
      case 'https://na1.api.riotgames.com':
        this.region = 'NA1';
        break;
      case 'https://eun1.api.riotgames.com':
        this.region = 'EUN1';
        break;
      case 'https://la1.api.riotgames.com':
        this.region = 'LA1';
        break;
      case 'https://kr.api.riotgames.com':
        this.region = 'KR';
        break;
      case 'https://oc1.api.riotgames.com':
        this.region = 'OC1';
        break;
      case 'https://ru.api.riotgames.com':
        this.region = 'RU';
        break;
      case 'https://jp1.api.riotgames.com':
        this.region = 'JP1';
        break;
      case 'https://br1.api.riotgames.com':
        this.region = 'BR1';
        break;
      case 'https://tr1.api.riotgames.com':
        this.region = 'TR1';
        break;
      case 'https://euw1.api.riotgames.com':
        this.region = 'EUW1';
        break;
      case 'https://la2.api.riotgames.com':
        this.region = 'LA2';
        break;
      default:
        return;
    }
  }

}
