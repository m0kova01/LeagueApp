import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './home/search.component';
import { SummonerDetailsComponent } from './home/summoner-details/summoner-details.component';
import { MatchRowComponent } from 'src/app/shared/components/match-row/match-row.component';
import { RegionSelectComponent } from 'src/app/shared/components/region-select/region-select.component';


@NgModule({
  declarations: [SearchComponent, SummonerDetailsComponent],
  imports: [
    CommonModule,
    MatchRowComponent,
    RegionSelectComponent
  ],
  entryComponents: [RegionSelectComponent]
})
export class HomeModule { }
