import { Injectable } from '@angular/core';
import {
	CanActivate,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RoleManagementSharedServiceService } from '../utils/services/role-management-shared-service.service';

@Injectable({
	providedIn: 'root'
})
export class IsPrintGuard implements CanActivate {
	constructor(
		private roleManagementSharedServiceService: RoleManagementSharedServiceService
	) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	):
		| Observable<boolean | UrlTree>
		| Promise<boolean | UrlTree>
		| boolean
		| UrlTree {
		return this.roleManagementSharedServiceService.printObs$;
	}
}
