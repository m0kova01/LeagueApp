import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/shared/api/match.service';
import MatchModel from 'src/app/shared/models/match-model';
import TeamModel from 'src/app/shared/models/team-model';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent implements OnInit {
  match: MatchModel;
  teams: TeamModel[];

  constructor(private matchService: MatchService) { }

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
      let teamToAdd = team;
      teamToAdd.teamMembers = [];
      for (let i = 0; i < this.match.participants.length; i++) {
        if (this.match.participants[i].teamId === teamToAdd.teamId) {
          this.match.participantIdentities.forEach(identity => {
            if (identity.participantId === this.match.participants[i].participantId) {
              this.match.participants[i].summonerName = identity.player.summonerName;
              this.match.participants[i].profileIcon = identity.player.profileIcon;
            }
          });
          teamToAdd.teamMembers.push(this.match.participants[i]);
        }
      }
      this.teams.push(teamToAdd);
    });

    console.log(this.teams)

  }

}
