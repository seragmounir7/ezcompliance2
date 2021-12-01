import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-high-risk-construction',
  templateUrl: './add-high-risk-construction.component.html',
  styleUrls: ['./add-high-risk-construction.component.scss'],
})
export class AddHighRiskConstructionComponent implements OnInit {
  // riskDetails!: FormGroup;
  // riskData: any = [];
  // ID: any;
  // hide: boolean = true;
  // constructor(
  //   private logicalFormInfo: LogicalFormInfoService,
  //   private fb: FormBuilder,
  //   public dialogRef: MatDialogRef<AddHighRiskConstructionComponent>,
  //   @Inject(MAT_DIALOG_DATA) public data: any
  // ) {
  //   {
  //     this.riskDetails = this.fb.group({
  //       title: ['', Validators.required],
  //     });
  //     console.log('riskDetails=>', this.riskDetails);
  //   }
  // }

  // ngOnInit(): void {}

  // onFormSubmit() {
  //   console.log(this.riskDetails);
  //   let data = {
  //     componentId: this.data.EditData,
  //     title: this.riskDetails.get('title').value,
  //   };
  //   this.logicalFormInfo.addSubComponent(data).subscribe((data) => {
  //     console.log('riskDetails=>', data);
  //     // this.riskData = data;
  //     this.dialogRef.close('true');
  //     this.riskDetails.reset();
  //     Swal.fire('Parameter added successfully');
  //   });
  // }
  
  riskConstr!: FormGroup;
  formData: any;numberOfLineBreaks: any;
;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo:LogicalFormInfoService
  ) { 
    this.riskConstr=this.fb.group({
     // mode:"JobTask",
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addAction();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.riskConstr.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.riskConstr.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    // console.log(this.riskConstr.value);
    let data={
      arrObj:this.riskConstr.get('arrObj').value
    }
    // console.log(data);
    
    this.logicalFormInfo.addMultipleRisk(data).subscribe((data) => {
      console.log('Risk=>', data);
      Swal.fire({
        title: 'Parameter Added successfully',
        showConfirmButton: false,
        timer: 1200,
      });  
      this.router.navigate(['/admin/siteInfo/highRisk']);    
    },(err)=>{console.error(err);} 
  
    );
}
calcHeight(value) {
  this.numberOfLineBreaks = (value.match(/\n/g) || []).length+1;
  console.log("numberOfLineBreaks",this.numberOfLineBreaks)
}
}