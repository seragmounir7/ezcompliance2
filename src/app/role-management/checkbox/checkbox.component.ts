import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormArray,
	FormControl,
	FormControlName
} from '@angular/forms';
import { RoleManagementService } from '../../utils/services/role-management.service';
import { of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddRoleComponent } from '../add-role/add-role.component';
import { RoleManagementSharedServiceService } from '../../utils/services/role-management-shared-service.service';
import Swal from 'sweetalert2';
import { SideNavAccess } from 'src/app/side-nav-access.enum';
@Component({
	selector: 'app-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
	// displayedColumns: string[] = ["role",'dynamicform',"Logicalforms","FormConfigure","SubscriptionRates",'LogicalFormData','CMS','StateRelation'];
	rolemanagment: FormGroup;

	showDatas: any;
	tempArray: MatTableDataSource<any>;
	// @ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	@Input() Arry: any;
	@Output() Arry1: any;
	roleArr: any;
	formArr = false;
	roleData: any;

	constructor(
		private fb: FormBuilder,
		private roleService: RoleManagementService,
		private dialog: MatDialog,
		private roleSharedService: RoleManagementSharedServiceService
	) {
		this.roleSharedService.getRoleEvent().subscribe((res) => {
			if (res) {
				this.getAllRole();
			}
		});
		this.getAllRole();
		this.rolemanagment = this.fb.group({});
	}

	formNameArr2 = [
		'Dashboard',
		'Generate a New Form',
		'Logical Forms',
		'Form List',
		'Submitted Forms',
		'Employee Details',
		'Form Settings'
	];
	formNameArr = [
		'dashboard',
		'GenerateaNewForm',
		'LogicalForms',
		'FormList',
		'SubmittedForms',
		'EmployeeDetails',
		'FormSettings'
	];
	/* formNameArr = [

		'dashboard',
		'dynamicForm',
		'Logicalforms',
		'FormConfigure',
		'SubscriptionRates',
		'LogicalFormData',
		'CMS',
		'StateRelation'
	]; */
	/* formNameArr2 = [
		'Dashboard',
		'Dynamic Form',
		'Logical Forms',
		'Form Configure',
		'Subscription Rates',
		'Logical FormData',
		'CMS',
		'State Relation'
	]; */
	displayedColumns: string[] = [
		//"role",

		'dashboard.Access',
		'dashboard.View',

		'dynamicForm.Access',
		'dynamicForm.Add',
		'dynamicForm.Delete',
		'dynamicForm.Update',
		'dynamicForm.View',

		'Logicalforms.Access',
		'Logicalforms.Add',
		'Logicalforms.Delete',
		'Logicalforms.Update',
		'Logicalforms.View',

		'FormConfigure.Access',
		'FormConfigure.Add',
		'FormConfigure.Delete',
		'FormConfigure.Update',
		'FormConfigure.View',

		'SubscriptionRates.Access',
		'SubscriptionRates.Add',
		'SubscriptionRates.Delete',
		'SubscriptionRates.Update',
		'SubscriptionRates.View',

		'LogicalFormData.Access',
		'LogicalFormData.Add',
		'LogicalFormData.Delete',
		'LogicalFormData.Update',
		'LogicalFormData.View',

		'CMS.Access',
		'CMS.Add',
		'CMS.Delete',
		'CMS.Update',
		'CMS.View',

		'StateRelation.Access',
		'StateRelation.Add',
		'StateRelation.Delete',
		'StateRelation.Update',
		'StateRelation.View'
	];

	ngOnInit(): void {
		this.getAllRole();
		//     of(this.data).subscribe((res:any)=>{
		//       console.log("resdata",res);
		// this.roleData=res
		//       for (let index = 0; index < this.roleData.length; index++) {
		//         for (let x = 0; x < this.roleData[index].access.length; x++) {

		//         let key=Object.keys( this.roleData[index].access[x])

		//            key.splice(0,1)
		//         key.forEach((z:any,i)=>{

		//          setTimeout(() => {
		//           console.log("this.roleData[index].access[x]",);
		//          this.rolemanagment.get(this.roleData[index].access[x].form+`_${z}_`+this.roleData[index].role).setValue(this.roleData[index]?.access[x][z])

		//           // if(this.roleData[index]?.access[x]?.Add){

		//           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Add_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Add)
		//           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Delete_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Delete)
		//           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Update_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Update)
		//           //   this.rolemanagment.get(this.roleData[index].access[x].form+'_Access_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Access)
		//           // this.rolemanagment.get(this.roleData[index].access[x].form+'_View_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.View)
		//           // }
		//           // this.rolemanagment.get(this.roleData[index].access[x].form+'_Access_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.Access)
		//           // this.rolemanagment.get(this.roleData[index].access[x].form+'_View_'+this.roleData[index].role).setValue(this.roleData[index]?.access[x]?.View)

		//          }, 2000);

		//         })

		//         }

		//       }

		//     })
	}
	doCheckboxCheck(e): void {
		// this.roles[index].checked = !this.roles[index].checked;
		console.log('event', e);
		//console.log("aaaa",this.rolemanagment.get('Access').value);
	}
	applyFilter($event) {}
	ngOnChanges(changes: any): void {}
	getdata(row) {
		console.log('row', row);
	}
	getAllRole() {
		this.roleService.getAllRole().subscribe((res: any) => {
			this.roleArr = res.data;
			this.roleArr = this.roleArr.map((x, i) => {
				console.log('i', i);

				if (i === 0) {
					x.i = 1;
				} else {
					x.i = 0;
				}
				return x;
			});
			console.log('res', this.roleArr);
			this.tempArray = new MatTableDataSource<any>(this.roleArr);
			this.tempArray.sort = this.sort;

			for (let index = 0; index < this.roleArr.length; index++) {
				for (let i = 1; i < this.formNameArr.length; i++) {
					this.rolemanagment.addControl(
						'dashboard_Access_' + this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						'dashboard_View_' + this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							'_Access_' +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							'_View_' +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							'_Delete_' +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							'_Update_' +
							this.roleArr[index].role,
						new FormControl('', Validators.required)
					);
					this.rolemanagment.addControl(
						this.formNameArr[i] +
							'_Add_' +
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
	newAction2(index): FormGroup {
		return this.fb.group({
			['dashboard_Access_' + this.roleArr[index].role]: [
				'',
				Validators.required
			]
		});
	}
	onSubmit() {
		console.log('submit', this.rolemanagment.value);
		const key = Object.keys(this.rolemanagment.value);
		const checkeBox = key.map((x: string) => {
			const arr = x.split('_');
			let obj;
			obj = {
				form: arr[0],
				role: arr[2]
			};
			obj[arr[1]] =
				this.rolemanagment.get(x).value == ''
					? false
					: this.rolemanagment.get(x).value;
			return obj;
		});
		console.log('form', checkeBox);
		let filterArr;
		let obj3;
		const access = [];

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
		const objArr = [];
		for (let index = 0; index < this.roleArr.length; index++) {
			let arr = [];
			arr = access.filter((x) => x.role === this.roleArr[index].role);
			arr.forEach((x) => {
				delete x.role;
			});
			const obj = {
				access: arr,
				role: this.roleArr[index].role,
				_id: this.roleArr[index]._id
			};
			objArr.push(obj);
		}
		console.log('acess', objArr);
		this.roleService
			.addMultipleRole(objArr)
			.subscribe((res) => console.log(res));
	}
	setValue() {
		for (let index = 0; index < this.roleArr.length; index++) {
			for (let x = 0; x < this.roleArr[index].access.length; x++) {
				const key = Object.keys(this.roleArr[index].access[x]);

				key.splice(0, 1);
				key.forEach((z: any, i) => {
					console.log('this.roleArr[index].access[x]');
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
	openDialog(role) {
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
			console.log('AddRoleComponent -> openDialog -> result', result);

			console.log('The dialog was closed');
		});
	}

	//////////////////////////////////////////////////

	count: number = 0;

	handleClick(index) {
		console.log(index);
		this.count = index;
		this.roleArr.map((x) => {
			x.i = 0;
		});
		this.roleArr[this.count].i = 1;
	}

	deleteRole(id) {
		{
			Swal.fire({
				title: 'Are you sure?',
				text: `Do you want to delete `,
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#00B96F',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, Delete!'
			}).then((result) => {
				if (result.value) {
					this.roleService.deleteRole(id).subscribe((res) => {
						Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						console.log('deleted res', res);
						this.getAllRole();
					});
				}
			});
		}
	}
}
