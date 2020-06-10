import { Component, OnInit, Input } from '@angular/core';
import MatchModel from '../../models/match-model';

@Component({
  selector: 'match-row',
  templateUrl: './match-row.component.html',
  styleUrls: ['./match-row.component.scss']
})
export class MatchRowComponent implements OnInit {
  @Input() match: MatchModel = new MatchModel();
  color: string = 'normal';

  constructor() { }

  ngOnInit(): void {
  }

  changeStyle($event) {
    this.color = $event.type == 'mouseover' ? 'hover' : 'nover';
  }

}
