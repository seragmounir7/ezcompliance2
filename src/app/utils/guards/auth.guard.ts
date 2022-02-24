import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanActivateChild,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
	constructor(private router: Router, private authService: AuthService) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		if (!sessionStorage.getItem('accessToken')) this.router.navigate(['/']);
		return this.authService.loginData$.pipe(
			map((res) => {
				return res?.accessToken
					? res.FirstLogin.firstLogin
						? false
						: true
					: false;
			})
		);

		// return sessionStorage.getItem('accessToken') && sessionStorage.getItem('accessToken') ? JSON.parse(sessionStorage.getItem('userData')).firstLogin? false : true : false;
	}
	canActivateChild(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return true;
	}
}
