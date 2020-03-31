import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NotesAreaComponent } from './notes-area.component';
import { NotesAreaFeatureRouting } from './notes-area.routing';

@NgModule({
    imports: [
      SharedModule,
      NotesAreaFeatureRouting
    ],
    declarations: [
      NotesAreaComponent
    ],
    providers: [
    ],
    exports: [
    ],
})
export class NotesAreaFeatureModule {}
