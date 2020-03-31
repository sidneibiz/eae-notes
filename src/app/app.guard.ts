import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, CanLoad, Route, RouterStateSnapshot } from '@angular/router';
import { AppComponent } from './app.component';

@Injectable()
export class AppGuard implements CanLoad, CanActivate, CanDeactivate<AppComponent> {

    canLoad(route: Route): boolean {
        return true;
    }

    canActivate(activatedRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot): boolean {
        debugger;
        console.log('Verify autentication here!');
        return true;
    }

    canDeactivate(FormComponent: AppComponent ,activatedRouteSnapshot: ActivatedRouteSnapshot, routeStateSnapshot: RouterStateSnapshot): boolean {
        return true;
    }

}