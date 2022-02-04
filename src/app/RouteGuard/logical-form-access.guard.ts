import { environment } from './../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LogicalFormAccessGuard implements CanActivate {
	constructor(private toastr: ToastrService) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		console.log('blocked');
		if (!environment.allRouteTemp) {
			const activeToast = this.toastr.error(
				'You Are Not allowed to access this route.',
				''
			);
		}
		return environment.allRouteTemp;
	}
}
