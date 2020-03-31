import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CheckboxModule, IconsModule } from 'angular-bootstrap-md';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  imports: [],
  exports: [
    SideBarComponent,
    CheckboxModule,
    IconsModule,
    FormsModule,
    MatSelectModule,
    MatSidenavModule,
  ],
  providers: [],
  declarations: [SideBarComponent]
})
export class SharedModule { }
