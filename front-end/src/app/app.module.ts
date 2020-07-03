import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import SummonerService from './shared/api/summoner.service';
import { HttpClientModule } from '@angular/common/http';
import { SummonerDetailsComponent } from './modules/home/home/summoner-details/summoner-details.component';
import { LayoutModule } from './layout/layout.module';
import { SearchComponent } from './modules/home/home/search.component';
import { RegionSelectComponent, ErrorMessageComponent, MatchRowComponent } from './shared/components';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorService } from './shared/api/error.service';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatchDetailsComponent } from './modules/home/home/match-details/match-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SummonerDetailsComponent,
    MatchRowComponent,
    MatchDetailsComponent,
    RegionSelectComponent,
    ErrorMessageComponent,
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
    MatDialogModule,
    MatRadioModule,
    MatTooltipModule,
    NgbModule
  ],
  providers: [HttpClientModule, SummonerService, ErrorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
