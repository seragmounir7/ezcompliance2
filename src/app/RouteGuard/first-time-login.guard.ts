import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
	Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../utils/services/auth.service';

@Injectable({
	providedIn: 'root'
})
export class FirstTimeLoginGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.authService.loginData$.pipe(
			map((res) => {
				if (res?.accessToken && res?.FirstLogin.firstLogin) {
					return true;
				} else {
					return this.router.createUrlTree(['/admin']);
				}
			})
		);
		// if (
		// 	sessionStorage.getItem('accessToken') &&
		// 	JSON.parse(sessionStorage.getItem('firstLogin')).firstLogin
		// ) {
		//
		// 	return true;
		// } else {
		//
		// 		'FirstTimeLoginGuard this.router.createUrlTree(["/admin"]);'
		// 	);
		// 	return this.router.createUrlTree(['/admin']);
		// }
	}
}
