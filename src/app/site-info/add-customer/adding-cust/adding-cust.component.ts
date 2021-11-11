import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-adding-cust',
  templateUrl: './adding-cust.component.html',
  styleUrls: ['./adding-cust.component.scss']
})
export class AddingCustComponent implements OnInit {

  addCustomerForm:FormGroup
  constructor(private dialogRef: MatDialogRef<AddingCustComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private fb : FormBuilder,
    private logicalFormInfoService: LogicalFormInfoService
    ) { }

  ngOnInit(): void {
    this.addCustomerForm = this.fb.group({
      customerName:[''],
      customerContact:[''],
      customerContactPhone:[''],
      customerEmail:[''],
    })

  }

  onSubmit(){
    console.log(this.addCustomerForm.value);
    
    this.logicalFormInfoService.addCustomer(this.addCustomerForm.value).subscribe(res => {
      console.log(res)
      this.dialogRef.close('ok')
    })
  }
}
