import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import SummonerService from 'src/app/shared/api/summoner.service';
import { ErrorService } from 'src/app/shared/api/error.service';
import SummonerModel from 'src/app/shared/models/summoner-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  summonerName: string;

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private summonerService: SummonerService, private errorService: ErrorService) { }

  ngOnInit(): void {
  }

  navigateToSearch(): void {
    this.router.navigate(['/home/search'])
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


}
