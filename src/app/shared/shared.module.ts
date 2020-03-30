import { NgModule } from '@angular/core';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CheckboxModule, IconsModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [],
  exports: [
    SideBarComponent,
    CheckboxModule,
    IconsModule,
  ],
  providers: [],
  declarations: [SideBarComponent]
})
export class SharedModule { }
