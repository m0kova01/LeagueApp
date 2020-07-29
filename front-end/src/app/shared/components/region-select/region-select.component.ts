import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { SummonerService } from '../../api/summoner.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegionService } from '../../api/region.service';


@Component({
  selector: 'app-region-select',
  templateUrl: './region-select.component.html',
  styleUrls: ['./region-select.component.scss']
})

export class RegionSelectComponent implements OnInit {
  region: string;
  regions = ['North America', 'Europe Nordic & East', 'LAN', 'Korea', 'Oceania',
    'Russia', 'Japan', 'Brazil', 'Turkey', 'Europe West', 'LAS'];

  constructor(private summonerService: SummonerService, public activeModal: NgbActiveModal, private regionService: RegionService) { }

  ngOnInit(): void {
    this.region = this.regionService.getLongRegion(this.region);
  }

  closeModal(): void {
    this.regionService.setRegion(this.region).subscribe(result => this.activeModal.close(result.ShortRegion));
  }

}
