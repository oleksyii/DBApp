import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISession } from '../entities/session';
import { SessionService } from '../services/session.service';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { BlueBackgroundDirective } from '../directives/blue-background.directive';
import { TimestampParserPipe } from '../pipes/TimestampParser.pipe';
import { headerInterceptor } from '../interceptors/header.interceptor';
import { PurpleBackgroundDirective } from '../directives/purple-background.directive';



@Component({
  selector: 'app-session-table',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule, 
    PurpleBackgroundDirective,
    TimestampParserPipe],
  templateUrl: './session-table.component.html',
  styleUrl: './session-table.component.css',
  providers: [SessionService]
  
})
export class SessionTableComponent {
  public sessions: ISession[] = [];
  public tableFields: string[] = [
    'sessionId',
    'start_timestamp', 
    'duration',
    'gamesetId'
  ]

  constructor(private _gameService: SessionService){
    this._gameService.getSessions().subscribe(data => this.sessions = data); //.data

    console.log('subscription');
    console.log(this.sessions);
    // console.log('Start Timestamp:', this.sessions[0].start_timestamp);
  }



}
