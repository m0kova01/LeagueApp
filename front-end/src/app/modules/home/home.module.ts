import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './home/search.component';
import { SummonerDetailsComponent } from './home/summoner-details/summoner-details.component';



@NgModule({
  declarations: [SearchComponent, SummonerDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
