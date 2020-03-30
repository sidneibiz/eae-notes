
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { LoginComponent } from './features/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NotesAreaComponent } from './features/notes-area/notes-area.component';
import { AppGuard } from './app.guard';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LoginComponent,
    NotesAreaComponent,
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    MatSelectModule,
    MatSidenavModule,
  ],
  providers: [AppGuard,],
  exports: [SideBarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
