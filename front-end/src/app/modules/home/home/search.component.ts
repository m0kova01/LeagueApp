import { Component, OnInit } from '@angular/core';
import SummonerModel from '../../../shared/models/summoner-model';
import SummonerService from 'src/app/shared/api/summoner.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegionSelectComponent } from 'src/app/shared/components/region-select/region-select.component';
import { ErrorService } from 'src/app/shared/api/error.service';
import { NgbModal, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { RegionService } from 'src/app/shared/api/region.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  summoner: SummonerModel;
  region: any;
  summonerName: string;

  constructor(public dialog: MatDialog, private summonerService: SummonerService, private router: Router, private errorService: ErrorService, public modalService: NgbModal, private regionService: RegionService) { }

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
      return;
    });
  }

  setRegion(): void {
    this.region = this.regionService.getShortRegion();
  }

}
