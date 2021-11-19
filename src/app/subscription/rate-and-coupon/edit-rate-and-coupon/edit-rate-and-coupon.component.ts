import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-rate-and-coupon',
  templateUrl: './edit-rate-and-coupon.component.html',
  styleUrls: ['./edit-rate-and-coupon.component.scss']
})
export class EditRateAndCouponComponent implements OnInit {
  editSubcriptionForm: FormGroup;
  dataRec: any;
  constructor(
    private dialogRef: MatDialogRef<EditRateAndCouponComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private Subscription: SubscriptionService
  ) {
    this.dataRec = data;
  }


  ngOnInit(): void {
    console.log(this.data);

    this.editSubcriptionForm = this.fb.group({
      monthly: [this.dataRec.monthly],
      defaultMonthly: [this.dataRec.defaultMonthly],
      defaultEmp: [this.dataRec.defaultEmp],
      yearlyDiscount: [this.dataRec.yearlyDiscount],
    });
  }
  onSubmit() {
    let data = {
      monthly: this.editSubcriptionForm.get('monthly').value,
      defaultMonthly: this.editSubcriptionForm.get('defaultMonthly').value,
      defaultEmp: this.editSubcriptionForm.get('defaultEmp').value,
      yearlyDiscount: this.editSubcriptionForm.get('yearlyDiscount').value,
    };
    this.Subscription.editPlan(this.dataRec._id, data).subscribe(res => {
      console.log(res);
      this.dialogRef.close('true');
      Swal.fire({
        title: ' Updated successfully',
        showConfirmButton: false,
        timer: 1200,
      });

      this.ngOnInit();
    })
  }
  addForm() {

    this.Subscription.addPlan(this.editSubcriptionForm.value).subscribe((resData) => {
      console.log('addPlan', resData);

      this.dialogRef.close('true');

      Swal.fire({
        title: ' Added successfully',
        showConfirmButton: false,
        timer: 1200,
      });

    });
  }
  close() {
    this.dialogRef.close();
}
}


