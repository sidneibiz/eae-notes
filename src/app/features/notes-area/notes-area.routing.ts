import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from '../../app.guard';
import { NotesAreaComponent } from './notes-area.component';

export const routes: Routes = [
  { path: 'notes-area', component: NotesAreaComponent, canActivate: [AppGuard] }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
  ],
  exports: [
      RouterModule,
  ],
  providers: [

  ],
  declarations: [
  ],
})
export class NotesAreaFeatureRouting {}
