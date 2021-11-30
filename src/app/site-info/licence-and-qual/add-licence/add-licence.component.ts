import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  
} from '@angular/forms'
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-licence',
  templateUrl: './add-licence.component.html',
  styleUrls: ['./add-licence.component.scss']
})
export class AddLicenceComponent implements OnInit {
  addLicenceFG!: FormGroup;
  formData: any;
  categories=[];
  numberOfLineBreaks: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo:LogicalFormInfoService
  ) { 
    this.addLicenceFG=this.fb.group({
     // mode:"JobTask",
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addAction();
    this.getAllLicenceCat();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.addLicenceFG.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({     
      title: ['', Validators.required],
      tradeCategoryId: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.addLicenceFG.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);    
    }
  }
  getAllLicenceCat() {
    this.logicalFormInfo.getAllLicenceCat().subscribe((res) => {
      console.log('getAllLicenceCat=>', res);
      this.categories = res.data; 
    });
 
  }
  onFormSubmit() {
    let data={
      arrObj:this.addLicenceFG.get('arrObj').value
    }
    console.log("data li cat",data);
    
    this.logicalFormInfo.addMultipleLicence(data).subscribe((res) => {
      console.log('licence=>', res);
      Swal.fire({
        title: 'Parameter added successfully',
        showConfirmButton: false,
        timer: 1200,
      });
      this.router.navigate(['/admin/siteInfo/licenceAndQual']);      
    },(err)=>{console.error(err);} 
  
    );
    
  }
  calcHeight(value) {
    this.numberOfLineBreaks = (value.match(/\n/g) || []).length+1;
    console.log("numberOfLineBreaks",this.numberOfLineBreaks)
  }

}
