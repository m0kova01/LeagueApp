import { Component, OnInit, Input } from '@angular/core';
import MatchModel from '../../models/match-model';
import SummonerService from '../../api/summoner.service';
import { ErrorService } from '../../api/error.service';
import ParticipantModel from '../../models/participant-model';
import *  as  summoner from '../../data/summoner.json';

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

  constructor(private summonerService: SummonerService, private errorService: ErrorService) { }

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
    this.summonerService.getMatchDetails(this.match.gameId).subscribe(response => { this.handleMatchDetails(response); },
      error => {
        this.errorService.DisplayError('Error loading match details!');
      });
  }

  handleMatchDetails(result): void {
    let participantID: number;
    for (let i = 0; i < result.participantIdentities.length; i++) {
      if (result.participantIdentities[i].player.summonerName === this.summonerName) {
        participantID = result.participantIdentities[i].participantId;
        break;
      }
    }

    for (let i = 0; i < result.participants.length; i++) {
      if (result.participants[i].participantId === participantID) {
        this.match.stats = result.participants[i].stats
        this.color = this.match.stats.win ? 'normal-victory' : 'normal-defeat';
        this.selectedParticipant = result.participants[i];

        for (let i = 0; i < this.summonerSpells.length; i++) {
          if (+this.summonerSpells[i][1].key === this.selectedParticipant.spell1Id)
            this.selectedParticipant.spell1IdString = this.summonerSpells[i][1].id;
          else if (+this.summonerSpells[i][1].key === this.selectedParticipant.spell2Id)
            this.selectedParticipant.spell2IdString = this.summonerSpells[i][1].id;
          // if (+this.summonerSpells.data[i].key === this.selectedParticipant.spell1Id)
          //   this.selectedParticipant.spell1IdString = this.summonerSpells.data[i].id;
        }
        // this.summonerSpells.default.data.forEach(spell => {
        //   if (spell['key'] === this.selectedParticipant.spell1Id)
        //     this.selectedParticipant.spell1IdString = spell['id'];
        //   else if (spell['key'] === this.selectedParticipant.spell2Id)
        //     this.selectedParticipant.spell2IdString = spell['id'];
        // });
        break;
      }
    }
    this.loaded = true;
  }

  displayTooltip(): void {

  }

}
