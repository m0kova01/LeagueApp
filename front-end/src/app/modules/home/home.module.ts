import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './home/search.component';
import { SummonerDetailsComponent } from './home/summoner-details/summoner-details.component';
import { MatchRowComponent } from 'src/app/shared/components/match-row/match-row.component';



@NgModule({
  declarations: [SearchComponent, SummonerDetailsComponent],
  imports: [
    CommonModule,
    MatchRowComponent
  ]
})
export class HomeModule { }
