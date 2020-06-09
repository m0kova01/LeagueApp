import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './home/search/search.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import SummonerService from './shared/api/summoner.service';
import { HttpClientModule } from '@angular/common/http';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

const config = {
  issuer: 'https://okta.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '{clientId}'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    OktaAuthModule
  ],
  providers: [HttpClientModule, SummonerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
