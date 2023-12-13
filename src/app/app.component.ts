import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GameTableComponent } from './game-table/game-table.component';
import { SessionTableComponent } from './session-table/session-table.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
     RouterOutlet,
     RouterLinkActive,
     RouterLink,
     GameTableComponent, 
     SessionTableComponent
    ], //, HttpClientModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'DBApp';

  constructor(){
    // this.http.get<any>('http://localhost:5229/api/Games');
  }
 
}
