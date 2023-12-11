import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IGame } from '../entities/game';
import { GameService } from '../services/game.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BlueBackgroundDirective } from '../directives/blue-background.directive';

@Component({
  selector: 'app-game-table',
  standalone: true,
  imports: [CommonModule, HttpClientModule, BlueBackgroundDirective], //
  templateUrl: './game-table.component.html',
  styleUrl: './game-table.component.css',
  providers: [GameService],
})
export class GameTableComponent{
  public games: IGame[] = [];
  public tableFields: string[] = [
    'gameId',
    'name', 
    'description',
    'playersMin', 
    'playersMax',
    'genre',
    'author',
    'gameCount' 
  ]

  constructor(private _gameService: GameService){
    this._gameService.getGames().subscribe(data => this.games = data); //.data
    // this.http.get<IGame[]>(this._getGamesUrl).subscribe(data => this.games = data);

    console.log('subscription');
    console.log(this.games);

  }
  // ngOnInit(): void {
  //   this.loadGames();
  // }

  // loadGames(): void {
  //   this._gameService.getGames().subscribe(data => this.games = data); // .data
  // }

  public getGames(){
    console.log(this._gameService.getGames().forEach(val => console.log(val)));
    this._gameService.getGames().subscribe(data => this.games = data);
    console.log(this.games);
  }
}
