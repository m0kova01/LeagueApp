import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './modules/home/home/search/search.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import SummonerService from './shared/api/summoner.service';
import { HttpClientModule } from '@angular/common/http';
import { SummonerDetailsComponent } from './modules/home/home/summoner-details/summoner-details.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SummonerDetailsComponent,
    SearchComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    LayoutModule,

  ],
  providers: [HttpClientModule, SummonerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
