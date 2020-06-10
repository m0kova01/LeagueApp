import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './home/search/search.component';
import { SummonerDetailsComponent } from './home/summoner-details/summoner-details.component';



@NgModule({
  declarations: [HomeComponent, SearchComponent, SummonerDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
