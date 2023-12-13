import { RouterModule, type Routes } from '@angular/router';
import { GameTableComponent } from './game-table/game-table.component';
import { SessionTableComponent } from './session-table/session-table.component';
// import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GameTableComponent },
  { path: 'sessions', component: SessionTableComponent },
  { path: '**', component: GameTableComponent }
];
