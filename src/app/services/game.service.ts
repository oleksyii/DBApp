import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGame } from '../entities/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  
  private _getGamesUrl: string = 'http://localhost:5229/api/Games';

  constructor(private _http: HttpClient) {}
  getGames(): Observable<IGame[]>{
    return this._http.get<IGame[]>(this._getGamesUrl);
  }
}
