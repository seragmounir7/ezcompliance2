import {
	animate,
	state,
	style,
	transition,
	trigger
} from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
	ClinetAdminObj,
	SuperAdminAuthServiceService,
	UserList
} from '../super-admin-auth-service.service';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TableDetails } from '../table-details.enum';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-client-admin-list',
	templateUrl: './client-admin-list.component.html',
	styleUrls: ['./client-admin-list.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({ height: '0px', minHeight: '0' })),
			state('expanded', style({ height: '*' })),
			transition(
				'expanded <=> collapsed',
				animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
			)
		])
	]
})
export class ClientAdminListComponent implements OnInit {
	expandedElement: ClinetAdminObj;
	dataSource: Observable<MatTableDataSource<ClinetAdminObj | UserList>>;
	displayedColumns: any[] = [
		'designation',
		'companyName',
		'email',
		'mobileNumber',
		'isEmailVerified',
		'status',
		// 'FirstLogin',
		// 'ppe',
		// 'plant',
		// 'loginType',
		// 'isMobileVerified',
		// 'licence',
		// '_id',
		// 'empDetails',
		'action'
		// 'password',
		// 'createdAt',
		// 'updatedAt',
		// '__v',
		// 'otp:'
	];
	userDetailsColoumns: any[] = [
		'designation',
		'email',
		'mobileNumber',
		'firstName',
		'lastName',
		'isEmailVerified',
		'status'
	];
	userId: string;
	title: string;

	constructor(
		private superAuth: SuperAdminAuthServiceService,
		private activatedRoute: ActivatedRoute,
		private router: Router,
		private changeDetectorRef: ChangeDetectorRef
	) {}

	ngOnInit(): void {
		this.dataSource = this.activatedRoute.params.pipe(
			tap((value) => {
				this.title = value.value
					? value.value.toUpperCase()
					: TableDetails.clientList.toUpperCase();
				this.changeDetectorRef.detectChanges();
			}),
			switchMap((res) => {
				// if(this.router.url.includes(TableDetails.clientList)){
				//   return this.superAuth.getAllClientAdmin().pipe(
				//     map(res =>  new MatTableDataSource(res))
				//   )
				// }
				switch (res?.value) {
					case TableDetails.clientList:
						return this.superAuth
							.getAllClientAdmin()
							.pipe(map((res) => new MatTableDataSource(res)));
					case TableDetails.userList:
						this.displayedColumns = this.userDetailsColoumns;
						return this.superAuth
							.getAllUserByClientAdmin(atob(res.id))
							.pipe(map((res) => new MatTableDataSource(res)));
					case TableDetails.subcontractorList:
						return this.superAuth
							.getAllSubContractorsByClientAdmin(atob(res.id))
							.pipe(map((res) => new MatTableDataSource(res)));
					default:
						return this.superAuth
							.getAllClientAdmin()
							.pipe(map((res) => new MatTableDataSource(res)));
				}
			})
		);
	}

	getUserData(_id: string) {}

	userList(id) {
		this.router.navigate([
			`admin/superadmin/${TableDetails.clientList}/${
				TableDetails.userList
			}/${btoa(id)}`
		]);
	}

	subcontractorList(id) {
		this.router.navigate([
			`admin/superadmin/${TableDetails.clientList}/${
				TableDetails.subcontractorList
			}/${btoa(id)}`
		]);
	}
}

@Pipe({
	name: 'empData',
	pure: true
})
export class EmpDataPipe implements PipeTransform {
	constructor(private superAuth: SuperAdminAuthServiceService) {}
	transform(_id: string, check: boolean): Observable<UserList[]> {
		return check
			? this.superAuth.getAllUserByClientAdmin(_id)
			: of([] as UserList[]);
	}
}
