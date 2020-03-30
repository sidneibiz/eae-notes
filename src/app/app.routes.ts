import { Routes } from "@angular/router";
import { LoginComponent } from './features/login/login.component';
import { NotesAreaComponent } from './features/notes-area/notes-area.component';
import { AppGuard } from './app.guard';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, canActivate: [AppGuard] },
    { path: 'notes-area', component: NotesAreaComponent, canActivate: [AppGuard] },
];