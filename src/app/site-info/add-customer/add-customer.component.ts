import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddingCustComponent } from './adding-cust/adding-cust.component';
import { EditCustComponent } from './edit-cust/edit-cust.component';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
	selector: 'app-add-customer',
	templateUrl: './add-customer.component.html',
	styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
	ELEMENT_DATA = [];
	displayedColumns: string[] = [
		'index',
		'customerName',
		'customerContact',
		'customerContactPhone',
		'customerEmail',
		'action'
	];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	constructor(
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private logicalFormInfoService: LogicalFormInfoService
	) {}

	ngOnInit(): void {
		this.getAllCustomers();
		this.setTitle.setTitle('WHS-Customer List');
	}
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}

	getAllCustomers(field = '', value = '') {
		this.logicalFormInfoService
			.getAllCustomer(field, value)
			.subscribe((res: any) => {
				console.log(res);
				this.dataSource.data = res.data;
				this.dataSource.paginator = this.paginator;
				//this.dataSource.sort = this.sort;
			});
	}

	// getAllJobTask() {
	//   // this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
	//   //   console.log('jobTaskDetails=>', res);
	//   //   // this.jobTaskData = res.data[0].subComponents;
	//   //   let data = res.data
	//   //   data.forEach((element, index) => {
	//   //     element.index = index + 1; //adding index
	//   //   });

	//   //   this.ELEMENT_DATA = data;
	//   //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	//   //   this.dataSource.paginator = this.paginator;

	//   //   //  this.task = res.data.subComponents;
	//   // });

	// }

	openDialog(id) {
		const dialogRef = this.dialog.open(AddingCustComponent, {
			height: '600px',
			width: '700px',

			data: {
				action: 'new',
				userId: id
			}
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result === 'ok') {
				this.getAllCustomers();
			}
			console.log(
				'CustomerInfoComponent -> openDialog -> result',
				result
			);

			console.log('The dialog was closed');
		});
	}
	edit(element) {
		console.log(element);
		const dialogRef = this.dialog.open(EditCustComponent, {
			height: '700px',
			width: '750px',

			// height:'400px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllCustomers();
			}
			console.log('The dialog was closed');
		});
	}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.customerName}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				this.logicalFormInfoService
					.deleteCustomer(item._id)
					.subscribe((res) => {
						Swal.fire({
							title: 'Deleted successfully',
							showConfirmButton: false,
							timer: 1200
						});
						console.log('deleted res', res);
						this.getAllCustomers();
					});
			}
		});
	}
	applyFilter(event: Event) {
		const filterValue = (event.target as HTMLInputElement).value;
		this.dataSource.filter = filterValue.trim().toLowerCase();
	}

	sortData(sort: Sort) {
		this.getAllCustomers(sort.active, sort.direction);
	}
	addCustomer() {
		const dialog = this.dialog.open(AddingCustComponent, {});
		dialog.afterClosed().subscribe((res) => {
			if (res === 'ok') {
				this.getAllCustomers();
			}
		});
	}
}
