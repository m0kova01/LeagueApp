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
import { MatchRowComponent } from './shared/components/match-row/match-row.component';
import { RegionSelectComponent } from './shared/components/region-select/region-select.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { ErrorMessageComponent } from './shared/components/error-message/error-message.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorService } from './shared/api/error.service';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SummonerDetailsComponent,
    MatchRowComponent,
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
