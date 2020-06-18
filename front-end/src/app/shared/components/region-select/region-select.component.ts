import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import SummonerService from '../../api/summoner.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.scss']
})

export class RegionSelectComponent implements OnInit {
  region: string;
  regions = ['North America', 'Europe Nordic & East', 'LAN', 'Korea', 'Oceania',
    'Russia', 'Japan', 'Brazil', 'Turkey', 'Europe West', 'LAS'];

  constructor(private summonerService: SummonerService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    switch (this.region) {
      case 'NA1':
        this.region = 'North America';
        break;
      case 'EUN1':
        this.region = 'Europe Nordic & East';
        break;
      case 'LA1':
        this.region = 'LAN';
        break;
      case 'KR':
        this.region = 'Korea';
        break;
      case 'OC1':
        this.region = 'Oceania';
        break;
      case 'RU':
        this.region = 'Russia';
        break;
      case 'JP1':
        this.region = 'Japan';
        break;
      case 'BR1':
        this.region = 'Brazil';
        break;
      case 'TR1':
        this.region = 'Turkey';
        break;
      case 'EUW1':
        this.region = 'Europe West';
        break;
      case 'LA2':
        this.region = 'LAS';
        break;
      default:
        return;
    }
  }

  closeModal(): void {
    switch (this.region) {
      case 'North America':
        this.region = 'NA1';
        this.summonerService.BASE_URL = 'https://na1.api.riotgames.com';
        break;
      case 'Europe Nordic & East':
        this.region = 'EUN1';
        this.summonerService.BASE_URL = 'https://eun1.api.riotgames.com';
        break;
      case 'LAN':
        this.region = 'LA1';
        this.summonerService.BASE_URL = 'https://la1.api.riotgames.com';
        break;
      case 'Korea':
        this.region = 'KR';
        this.summonerService.BASE_URL = 'https://kr.api.riotgames.com';
        break;
      case 'Oceania':
        this.region = 'OC1';
        this.summonerService.BASE_URL = 'https://oc1.api.riotgames.com';
        break;
      case 'Russia':
        this.region = 'RU';
        this.summonerService.BASE_URL = 'https://ru.api.riotgames.com';
        break;
      case 'Japan':
        this.region = 'JP1';
        this.summonerService.BASE_URL = 'https://jp1.api.riotgames.com';
        break;
      case 'Brazil':
        this.region = 'BR1';
        this.summonerService.BASE_URL = 'https://br1.api.riotgames.com';
        break;
      case 'Turkey':
        this.region = 'TR1';
        this.summonerService.BASE_URL = 'https://tr1.api.riotgames.com';
        break;
      case 'Europe West':
        this.region = 'EUW1';
        this.summonerService.BASE_URL = 'https://euw1.api.riotgames.com';
        break;
      case 'LAS':
        this.region = 'LA2';
        this.summonerService.BASE_URL = 'https://la2.api.riotgames.com';
        break;
      default:
        return;
    }

    this.activeModal.close(this.region);
  }

}
