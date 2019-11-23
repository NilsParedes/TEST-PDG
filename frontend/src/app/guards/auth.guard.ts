import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        let permiso = false;
        let url = '/login';

        !localStorage.getItem('token') ? this.router.navigate(['/login']) : null;

        if (permiso) {
            return true;
        } else {
            this.router.navigate([url]);
            return false;
        }

    }

}
