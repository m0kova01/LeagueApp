import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  navigateToSearch(): void {
    this.router.navigate(['/home/search'])
  }

}
