import { Component, OnInit } from '@angular/core';
import SummonerService from 'src/app/shared/api/summoner.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  summonerName: string;

  constructor(private summonerService: SummonerService) { }

  ngOnInit(): void {
  }

  lookupSummoner(): void {
    this.summonerService.getSummoner(this.summonerName);
  }

}
