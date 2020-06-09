import { Component, OnInit } from '@angular/core';
import SummonerModel from '../shared/models/summoner-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  summoner: SummonerModel;
  constructor() { }

  ngOnInit(): void {
  }

  handleSummoner(summoner: SummonerModel): void {
    this.summoner = summoner;
  }

}
