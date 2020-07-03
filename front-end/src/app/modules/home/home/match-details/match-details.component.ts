import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/shared/api/match.service';
import MatchModel from 'src/app/shared/models/match-model';
import TeamModel from 'src/app/shared/models/team-model';
import { SummonerService } from 'src/app/shared/api/summoner.service';
import { ErrorService } from 'src/app/shared/api/error.service';
import SummonerModel from 'src/app/shared/models/summoner-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {
  match: MatchModel;
  teams: TeamModel[];

  constructor(
    private matchService: MatchService, private summonerService: SummonerService,
    private errorService: ErrorService, private router: Router) { }

  ngOnInit(): void {
    this.matchService.currentMatch.subscribe(match => {
      this.match = match;
      this.organizeTeams();
    });
  }

  organizeTeams(): void {
    if (!this.match)
      return;

    this.teams = [];

    this.match.teams.forEach(team => {
      const teamToAdd = team;
      teamToAdd.teamMembers = [];
      for (const participant of this.match.participants) {
        if (participant.teamId === teamToAdd.teamId) {
          this.match.participantIdentities.forEach(identity => {
            if (identity.participantId === participant.participantId) {
              participant.summonerName = identity.player.summonerName;
              participant.profileIcon = identity.player.profileIcon;
            }
          });
          teamToAdd.teamMembers.push(participant);
        }
      }
      this.teams.push(teamToAdd);
    });
  }

  lookupSummoner(summonerName: string): void {
    this.summonerService.getSummoner(summonerName).subscribe(response => { this.handleResponse(response); },
      error => {
        this.errorService.DisplayError('Summoner not found!');
        return;
      });
  }

  handleResponse(response: any): void {
    if (response.status) {
      return;
    }
    const summoner = new SummonerModel();

    summoner.accountId = response.accountId;
    summoner.id = response.id;
    summoner.name = response.name;
    summoner.profileIconId = response.profileIconId;
    summoner.puuid = response.puuid;
    summoner.revisionDate = response.revisionDate;
    summoner.summonerLevel = response.summonerLevel;

    this.summonerService.changeSummoner(summoner);

    this.router.navigate(['/home/details']);
  }

}
