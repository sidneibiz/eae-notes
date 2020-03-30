import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginFeatureRouting } from './login.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
      SharedModule,
      LoginFeatureRouting
    ],
    declarations: [
      LoginComponent
    ],
    providers: [
    ],
    exports: [
    ],
})
export class LoginFeatureModule {}
