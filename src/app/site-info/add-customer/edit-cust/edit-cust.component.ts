import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.scss']
})
export class EditCustComponent implements OnInit {
  editCustomerForm:FormGroup
  constructor(
    private dialogRef: MatDialogRef<EditCustComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder,
    private logicalFormInfoService: LogicalFormInfoService
    ) { }

  ngOnInit(): void {
    console.log(this.data);
    
    this.editCustomerForm = this.fb.group({
      customerName:[this.data.customerName],
      customerContact:[this.data.customerContact],
      customerContactPhone:[this.data.customerContactPhone],
      customerEmail:[this.data.customerEmail],
    })
  }
  onSubmit(){
    this.logicalFormInfoService.updateCustomer(this.data._id,this.editCustomerForm.value).subscribe(res => {
      console.log(res);
      this.dialogRef.close('ok')
    })
  }

}
