import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from './app.component';

@Injectable()
export class AppGuard implements CanLoad, CanActivate, CanDeactivate<AppComponent> {

    canLoad(): boolean {
        /*
            route: Route
        */
        return true;
    }

    canActivate(): boolean {
        /*
            activatedRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot
        */
        console.log('Verify autentication here!');
        return true;
    }

    canDeactivate(): boolean {
        /*
            FormComponent: AppComponent ,activatedRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot
        */
        return true;
    }

}
