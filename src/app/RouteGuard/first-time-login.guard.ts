import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class FirstTimeLoginGuard implements CanActivate {
  constructor(private router: Router){}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
      console.log('FirstTimeLoginGuard')
		return false;
	}
}
