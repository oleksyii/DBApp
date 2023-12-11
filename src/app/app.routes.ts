import { RouterModule, Routes } from '@angular/router';
import { GameTableComponent } from './game-table/game-table.component';
import { SessionTableComponent } from './session-table/session-table.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'games', component: GameTableComponent },
    { path: 'sessions', component: SessionTableComponent },
    { path: '**', component: PageNotFoundComponent }
];