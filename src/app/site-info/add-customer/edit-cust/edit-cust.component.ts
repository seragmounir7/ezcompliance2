import { FormBuilder, FormGroup,FormArray } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.scss']
})
export class EditCustComponent implements OnInit {
  editCustomerForm:FormGroup;
  StatesData:any=[''];
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
     // customerContactPhone:[this.data.customerContactPhone],
      //customerEmail:[this.data.customerEmail],
      streetAddress:[this.data.streetAddress],
      stateId:[this.data.stateId._id],
      postCode:[this.data.postCode],
      ABN:[this.data.ABN],
     contacts: this.fb.array([]),
      position:[this.data.contacts.position],
    email:[this.data.contacts.email],
    phone:[this.data.contacts.phone]


    })
    this.addCustomerDetails();
    this.getAllStates();
  }

  onSubmit(){
    
    this.logicalFormInfoService.updateCustomer(this.data._id,this.editCustomerForm.value).subscribe(res => {
      console.log(res);
      this.dialogRef.close('true');
      Swal.fire({
        title: 'Customer Edited successfully',
        showConfirmButton: false,
        timer: 1200,
      });
    });
  }
  close() {
    this.dialogRef.close();
}
addCustomerDetails() {
  this.customerArr().push(this.customerForm());

}
customerArr(): FormArray {
  return this.editCustomerForm.get('contacts') as FormArray;
}
customerForm(): FormGroup {
  return this.fb.group({
    // position:[this.data.contacts.position],
    // email:[this.data.contacts.email],
    // phone:[this.data.contacts.phone]

  });
}
removeCustomerDetails(i) {
  const item = <FormArray>this.editCustomerForm.controls['contacts'];
  if (item.length > 1) {
    item.removeAt(i);

  }
}
getAllStates() {
  this.logicalFormInfoService.getAllStates().subscribe((res: any) => {
    console.log('setStatesDetails=>', res);
    this.StatesData = res.data;
  });
}
}
