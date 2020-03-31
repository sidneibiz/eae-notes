import { NgModule } from '@angular/core';
import { NotesAreaFeatureModule } from './notes-area/notes-area.module';
import { LoginFeatureModule } from './login/login.module';

@NgModule({
  imports: [
    NotesAreaFeatureModule,
    LoginFeatureModule,
  ],
  exports: [NotesAreaFeatureModule],
  providers: [],
  declarations: []
})
export class FeaturesModule { }
