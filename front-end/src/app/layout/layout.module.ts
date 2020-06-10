import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [NavbarComponent]
})
export class LayoutModule { }
