import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummonerDetailsComponent } from './modules/home/home/summoner-details/summoner-details.component';
import { SearchComponent } from './modules/home/home/search.component';

const routes: Routes = [
  { path: 'home/search', component: SearchComponent },
  { path: 'home/details', component: SummonerDetailsComponent},
  { path: '', redirectTo: 'home/search', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
