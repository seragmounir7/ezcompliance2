import { Injectable } from '@angular/core';
import {
	CanActivate,
	CanActivateChild,
	CanLoad,
	Route,
	UrlSegment,
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
export class NonAuthGuard implements CanActivate, CanActivateChild, CanLoad {
	constructor(private router: Router, private authService: AuthService) {}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		// if (sessionStorage.getItem('accessToken'))
		// 	this.router.navigate(['/admin']);

		return this.authService.loginData$.pipe(
			map((res) => {
				if (res?.accessToken) {
					return this.router.createUrlTree(['/admin']);
				} else {
					return true;
				}
			})
		);
		// return sessionStorage.getItem('accessToken') ? false : true;
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
	canLoad(
		route: Route,
		segments: UrlSegment[]
	): Observable<boolean> | Promise<boolean> | boolean {
		return true;
	}
}
