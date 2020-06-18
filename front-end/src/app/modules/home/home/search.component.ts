import { Component, OnInit } from '@angular/core';
import SummonerModel from '../../../shared/models/summoner-model';
import SummonerService from 'src/app/shared/api/summoner.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegionSelectComponent } from 'src/app/shared/components/region-select/region-select.component';
import { ErrorService } from 'src/app/shared/api/error.service';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  summoner: SummonerModel;
  region = 'NA1';
  summonerName: string;

  constructor(public dialog: MatDialog, private summonerService: SummonerService, private router: Router, private errorService: ErrorService, public modalService: NgbModal) { }

  ngOnInit(): void {
    this.setRegion();
  }

  lookupSummoner(): void {
    this.summonerService.getSummoner(this.summonerName).subscribe(response => { this.handleResponse(response) },
      error => {
        this.errorService.DisplayError('Summoner not found!');
        return;
      });
  }

  handleResponse(response: any): void {
    if (response.status) {
      console.log(response.status.message);
      return;
    }
    const summoner = new SummonerModel();

    summoner.accountId = response.accountId;
    summoner.id = response.id;
    summoner.name = response.name;
    summoner.profileIconId = response.profileIconId;
    summoner.puuid = response.puuid;
    summoner.revisionDate = response.revisionDate;
    summoner.summonerLevel = response.summonerLevel;

    this.summonerService.changeSummoner(summoner);

    this.router.navigate(['/home/details']);
  }

  handleSummoner(summoner: SummonerModel): void {
    this.summoner = summoner;
  }

  changeRegion(): void {
    const modalRef: NgbModalRef = this.modalService.open(RegionSelectComponent);
    modalRef.componentInstance.region = this.region;
    modalRef.result.then(result => {
      if (result)
        this.region = result;
    }).catch(e => {
      return; });
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
