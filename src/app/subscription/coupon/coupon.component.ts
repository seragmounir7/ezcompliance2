import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatPaginator } from '@angular/material/paginator';
import { AddEditCouponComponent } from './add-edit-coupon/add-edit-coupon.component';
import { MatSort, Sort } from '@angular/material/sort';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-coupon',
	templateUrl: './coupon.component.html',
	styleUrls: ['./coupon.component.scss']
})
export class CouponComponent implements OnInit {
	ELEMENT_DATA = [];
	displayedColumns: string[] = ['index', 'couponName', 'discount', 'action'];
	dataSource = new MatTableDataSource(this.ELEMENT_DATA);
	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;
	ngAfterViewInit() {
		this.dataSource.paginator = this.paginator;
	}
	constructor(
		private subscript: SubscriptionService,
		private fb: FormBuilder,
		private setTitle: SetTitleService,
		private dialog: MatDialog,
		private spinner: NgxSpinnerService
	) {}

	ngOnInit(): void {
		this.getAllCoupon();
		this.setTitle.setTitle('WHS-Coupon');
	}
	getAllCoupon(field = '', value = '') {
		this.subscript.getAllCoupon(field, value).subscribe((res) => {
			const couponData = res.data;
			couponData.forEach((element, index) => {
				element.index = index + 1; //adding index
			});
			this.ELEMENT_DATA = couponData;
			this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
			this.dataSource.paginator = this.paginator;
		});
	}
	edit(element) {
		const dialogRef = this.dialog.open(AddEditCouponComponent, {
			width: '550px',
			height: '300px',
			data: element
		});
		dialogRef.afterClosed().subscribe((result) => {
			if (result == 'true') {
				this.getAllCoupon();
			}
		});
	}
	delete(item) {
		Swal.fire({
			title: 'Are you sure?',
			text: `Do you want to delete "${item.couponName}"?`,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#00B96F',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Delete!'
		}).then((result) => {
			if (result.value) {
				void this.spinner.show();
				this.subscript.deleteCoupon(item._id).subscribe((res) => {
					this.getAllCoupon();
					void this.spinner.hide();
				});
			}
		});
	}

	sortData(sort: Sort) {
		this.getAllCoupon(sort.active, sort.direction);
	}
}
