import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import Swal from 'sweetalert2';
@Component({
	selector: 'app-add-edit-coupon',
	templateUrl: './add-edit-coupon.component.html',
	styleUrls: ['./add-edit-coupon.component.scss']
})
export class AddEditCouponComponent implements OnInit {
	couponDetails: FormGroup;
	dataRec: any;
	constructor(
		private dialogRef: MatDialogRef<AddEditCouponComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
		private fb: FormBuilder,
		private Subscription: SubscriptionService
	) {
		this.dataRec = data;
	}

	ngOnInit(): void {
		this.couponDetails = this.fb.group({
			couponName: [this.dataRec.couponName, Validators.required],
			discount: [this.dataRec.discount, Validators.required]
		});
	}
	onSubmit() {
		let data = {
			couponName: this.couponDetails.get('couponName').value,
			discount: this.couponDetails.get('discount').value
		};

		this.Subscription.editCoupon(this.dataRec._id, data).subscribe(
			(res) => {
				this.dialogRef.close('true');
				Swal.fire({
					title: ' Updated successfully',
					showConfirmButton: false,
					timer: 1200
				});

				this.ngOnInit();
			}
		);
	}
	addForm() {
		this.Subscription.addCoupon(this.couponDetails.value).subscribe(
			(resData) => {
				console.log('addCoupon', resData);

				this.dialogRef.close('true');

				Swal.fire({
					title: ' Added successfully',
					showConfirmButton: false,
					timer: 1200
				});
			}
		);
	}
	close() {
		this.dialogRef.close();
	}
}
