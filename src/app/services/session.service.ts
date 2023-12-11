import { Injectable } from '@angular/core';
import { ISession } from '../entities/session';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _getGamesUrl: string = 'http://localhost:5229/api/Sessions';

  constructor(private _http: HttpClient) {}
  getSessions(): Observable<ISession[]>{
    return this._http.get<ISession[]>(this._getGamesUrl);
  }
}
