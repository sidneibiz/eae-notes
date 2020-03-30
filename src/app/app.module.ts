
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppGuard } from './app.guard';
import { ROUTES } from './app.routes';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule,
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatSelectModule,
    FeaturesModule,
    MatSidenavModule,
  ],
  providers: [AppGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
