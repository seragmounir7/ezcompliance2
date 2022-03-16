import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/utils/services/auth.service';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddRoleComponent } from './add-role/add-role.component';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-role-management',
	templateUrl: './role-management.component.html',
	styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {
	@Output() isRoleInvaid: EventEmitter<boolean> = new EventEmitter<boolean>();
	employeePurchased: number;
	roleLength: number = 0;

	constructor(
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private authService: AuthService
	) {}

	ngOnInit(): void {
		this.authService.loginData$
			.pipe(map((res) => res?.employeePurchased))
			.subscribe((res) => (this.employeePurchased = res));
		this.setTitle.setTitle('WHS-Role Management');
	}
	openDialog(id) {
		const dialogRef = this.dialog.open(AddRoleComponent, {
			height: '50%',
			width: '500px',

			data: {
				action: 'new',
				userId: id
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result === 'true') {
			}
		});
	}
}
