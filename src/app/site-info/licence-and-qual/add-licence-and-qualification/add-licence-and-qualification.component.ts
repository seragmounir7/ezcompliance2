import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddContactComponent } from 'src/app/landing-page-info/contact-us/add-contact/add-contact.component';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

@Component({
  selector: 'app-add-licence-and-qualification',
  templateUrl: './add-licence-and-qualification.component.html',
  styleUrls: ['./add-licence-and-qualification.component.scss']
})
export class AddLicenceAndQualificationComponent implements OnInit {
  licenceAndQual: FormGroup;
  formData: any;
  dataLicence: any;

  constructor(
    private fb: FormBuilder,
    private LandingPageInfoService:LandingPageInfoServiceService,
    private dialogRef: MatDialogRef<AddLicenceAndQualificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: any,
  ) { 
    this.dataLicence = data1.headerData;
    this.licenceAndQual=this.fb.group({
      mode:"Licence",
      arrObj: this.fb.array([]),
    });
    console.log('jobTaskDetails=>', this.licenceAndQual);
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
    return this.licenceAndQual.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.licenceAndQual.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.licenceAndQual);
    this.LandingPageInfoService.addFormData(this.licenceAndQual.getRawValue()).subscribe((data) => {
      console.log('teamData=>', data);
      this.formData = data;
    });
  }

  // editContactUs(id) {
  //   console.log('id=>', id);
  //   this.myId = this.dataContact._id;

  //   console.log('form', this.contactUsForm.value);

  //   // this.isEdit = true;
  //   this.url
  //     .editContactUs(this.myId, this.contactUsForm.value)
  //     .subscribe((res) => {
  //       console.log('Data Set response' + res);
  //       this.data = res.data;
  //       console.log('new response' + this.data);
  //       this.dialogRef.close('true');
  //     });
  // }

}
