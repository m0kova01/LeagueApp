import { Component, OnInit, Input } from '@angular/core';
import MatchModel from '../../models/match-model';
import { ErrorService } from '../../api/error.service';
import ParticipantModel from '../../models/participant-model';
import * as summoner from '../../data/summoner.json';
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
      this.color = $event.type === 'mouseover' ? 'hover-victory' : 'normal-victory';
    else
      this.color = $event.type === 'mouseover' ? 'hover-defeat' : 'normal-defeat';
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
    for (const participant of this.match.participantIdentities) {
      if (participant.player.summonerName === this.summonerName) {
        participantID = participant.participantId;
        break;
      }
    }

    for (const participant of this.match.participants) {
      if (participant.participantId === participantID) {
        this.match.stats = participant.stats;
        this.color = this.match.stats.win ? 'normal-victory' : 'normal-defeat';
        this.selectedParticipant = participant;

        for (const spell of this.summonerSpells) {
          if (+spell[1].key === this.selectedParticipant.spell1Id)
            this.selectedParticipant.spell1IdString = spell[1].id;
          else if (+spell[1].key === this.selectedParticipant.spell2Id)
            this.selectedParticipant.spell2IdString = spell[1].id;
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
