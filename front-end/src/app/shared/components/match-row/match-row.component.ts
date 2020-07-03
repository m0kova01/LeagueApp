import { Component, OnInit, Input } from '@angular/core';
import MatchModel from '../../models/match-model';
import SummonerService from '../../api/summoner.service';
import { ErrorService } from '../../api/error.service';
import ParticipantModel from '../../models/participant-model';
import *  as  summoner from '../../data/summoner.json';
import { MatchService } from '../../api/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'match-row',
  templateUrl: './match-row.component.html',
  styleUrls: ['./match-row.component.scss']
})
export class MatchRowComponent implements OnInit {
  @Input() match: MatchModel = new MatchModel();
  @Input() summonerName: string;
  selectedParticipant: ParticipantModel;
  color: string;
  loaded = false;
  summonerSpells = Object.entries(summoner.data);

  constructor(private errorService: ErrorService, private matchService: MatchService, private router: Router) { }

  ngOnInit(): void {
    this.loadMatchDetails();
  }


  changeStyle($event) {
    if (this.match.stats.win)
      this.color = $event.type == 'mouseover' ? 'hover-victory' : 'normal-victory';
    else
      this.color = $event.type == 'mouseover' ? 'hover-defeat' : 'normal-defeat';
  }

  loadMatchDetails(): void {
    this.selectedParticipant = new ParticipantModel();
    this.matchService.getMatchDetails(this.match.gameId).subscribe(response => { this.handleMatchDetails(response); },
      error => {
        this.errorService.DisplayError('Error loading match details!');
      });
  }

  handleMatchDetails(result): void {
    if (!result) {
      this.errorService.DisplayError('Error fetching match details.');
      return;
    }

    this.match.participants = result.participants;
    this.match.teams = result.teams;
    this.match.participantIdentities = result.participantIdentities;

    let participantID: number;
    for (let i = 0; i < this.match.participantIdentities.length; i++) {
      if (this.match.participantIdentities[i].player.summonerName === this.summonerName) {
        participantID = this.match.participantIdentities[i].participantId;
        break;
      }
    }

    for (let i = 0; i < this.match.participants.length; i++) {
      if (this.match.participants[i].participantId === participantID) {
        this.match.stats = this.match.participants[i].stats
        this.color = this.match.stats.win ? 'normal-victory' : 'normal-defeat';
        this.selectedParticipant = this.match.participants[i];

        for (let i = 0; i < this.summonerSpells.length; i++) {
          if (+this.summonerSpells[i][1].key === this.selectedParticipant.spell1Id)
            this.selectedParticipant.spell1IdString = this.summonerSpells[i][1].id;
          else if (+this.summonerSpells[i][1].key === this.selectedParticipant.spell2Id)
            this.selectedParticipant.spell2IdString = this.summonerSpells[i][1].id;
        }
        break;
      }
    }
    this.loaded = true;
  }

  matchClick(): void {
    this.matchService.changeMatch(this.match);

    this.router.navigate(['home/match-details']);
  }
}
