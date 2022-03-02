/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl
} from '@angular/forms';
import { RoleManagementService } from '../../utils/services/role-management.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoleComponent } from '../add-role/add-role.component';
import { RoleManagementSharedServiceService } from '../../utils/services/role-management-shared-service.service';
import Swal from 'sweetalert2';
import { AccessLabel, AccessName, AccessType } from './accessName';
import {
	AccessArr,
	Datum,
	RoleID
} from 'src/app/utils/types/AccessResponceTypes';
import { AuthService } from 'src/app/utils/services/auth.service';
@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
	@Output() roleLength: EventEmitter<number> = new EventEmitter<number>();
	rolemanagment: FormGroup;
	count: number = 0;
	formArr = false;
	accessName: AccessType = new AccessName();
	accessLabel: AccessType = new AccessLabel();
	roleArr: Datum[];

	constructor(
		private fb: FormBuilder,
		private roleService: RoleManagementService,
		private dialog: MatDialog,
		private roleSharedService: RoleManagementSharedServiceService,
		private authService: AuthService
	) {
		this.roleSharedService.getRoleEvent.subscribe((res) => {
			if (res) {
				this.getAllRole();
			}
		});
		this.rolemanagment = this.fb.group({});
	}

	formNameArr2 = [
		'Dashboard',
		'WHS Forms',
		// 'Generate a New Form',
		// 'Logical Forms',
		// 'Form List',
		// 'Submitted Forms',
		'Company Information'
		// 'Form Settings'
	];
	formNameArr = [
		'dashboard',
		'WHSForms',
		// 'GenerateaNewForm',
		// 'LogicalForms',
		// 'FormList',
		// 'SubmittedForms',
		'CompanyInformation'
		// 'FormSettings'
	];

	ngOnInit(): void {
		this.getAllRole();
	}
	getAllRole(): void {
		this.roleService.getAllAcess().subscribe((res) => {
			this.roleArr = res.data;
			this.roleLength.emit(this.roleArr.length);
			this.roleArr = this.roleArr.map((x, i) => {
				if (i === 0) {
					x.i = 1;
				} else {
					x.i = 0;
				}
				return x;
			});

			for (let index = 0; index < this.roleArr.length; index++) {
				for (let i = 0; i < this.formNameArr.length; i++) {
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							this.accessName.access +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							this.accessName.view +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							this.accessName.delete +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							this.accessName.edit +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							this.accessName.add +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
				}
			}
			this.setValue();
		});
	}
	add2(): FormArray {
		return this.rolemanagment.get('attendees') as FormArray;
	}
	newAction2(index: number): FormGroup {
		return this.fb.group({
			['dashboard_Access_' + this.roleArr[index].role]: [
				'',
				Validators.required
			]
		});
	}
	onSubmit(): void {
		const key = Object.keys(this.rolemanagment.value);
		const checkeBox = key.map((x: string) => {
			const arr: string[] = x.split('_');
			const obj: AccessArr = {
				form: arr[0],
				role: arr[2]
			};
			obj[arr[1]] =
				this.rolemanagment.get(x).value === ''
					? false
					: (this.rolemanagment.get(x).value as boolean);
			return obj;
		});

		let obj3: AccessArr;
		const access: AccessArr[] = [];

		for (let index = 0; index < this.roleArr.length; index++) {
			for (let i = 0; i < this.formNameArr.length; i++) {
				obj3 = checkeBox
					.filter((x) => {
						return (
							x.form === this.formNameArr[i] &&
							x.role === this.roleArr[index].role
						);
					})
					.reduce((r, c) => Object.assign(r, c), {});
				access.push(obj3);
			}
		}
		const objArr: Datum[] = [];
		for (let index = 0; index < this.roleArr.length; index++) {
			let arr: AccessArr[] = [];
			arr = access.filter((x) => x.role === this.roleArr[index].role);
			arr.forEach((x) => {
				x.formName = x.form;
				delete x.form;
				delete x.role;
			});
			const obj: Datum = {
				accessArr: arr,
				// role: this.roleArr[index].role,
				roleId: (this.roleArr[index].roleId as RoleID)._id
			};
			objArr.push(obj);
		}

		this.roleService.updateAllAccess(objArr).subscribe(() => {
			void Swal.fire({
				title: 'Access Updated Successfully',
				showConfirmButton: false,
				timer: 1200
			});
		});
	}
	setValue(): void {
		for (let index = 0; index < this.roleArr.length; index++) {
			for (let x = 0; x < this.roleArr[index].access.length; x++) {
				const key = Object.keys(this.roleArr[index].access[x]);

				// key.splice(0, 1);
				key.forEach((z: string) => {
					if ('form' === z || 'formName' === z || '_id' === z) return;
					this.rolemanagment
						.get(
							this.roleArr[index].access[x].form +
								`_${z}_` +
								this.roleArr[index].role
						)
						.setValue(this.roleArr[index]?.access[x][z]);
				});
			}
		}
		this.formArr = true;
	}
	openDialog(role: Datum): void {
		const dialogRef = this.dialog.open(AddRoleComponent, {
			height: '50%',
			width: '500px',

			data: {
				action: 'edit',
				role
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result === 'true') {
				this.ngOnInit();
			}
		});
	}

	handleClick(index: number): void {
		this.count = index;
		this.roleArr.map((x) => {
			x.i = 0;
		});
		this.roleArr[this.count].i = 1;
	}

	deleteRole(id: string | RoleID): void {
		void Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete `,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.roleService
					.deleteRole((id as RoleID)._id)
					.subscribe(() => {
						void Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						this.getAllRole();
					});
			}
		});
	}
}
