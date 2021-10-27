import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { AddLicenceAndQualificationComponent } from './add-licence-and-qualification/add-licence-and-qualification.component';

@Component({
  selector: 'app-licence-and-qual',
  templateUrl: './licence-and-qual.component.html',
  styleUrls: ['./licence-and-qual.component.scss']
})
export class LicenceAndQualComponent implements OnInit {
  licenceAndQual: FormGroup;
  formData: any;

  constructor(
    private fb: FormBuilder,
    private LandingPageInfoService:LandingPageInfoServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
  ) { 
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

  openDialog(id): void {
    const dialogRef = this.dialog.open(AddLicenceAndQualificationComponent, {
      // width: '800px',
      data: {
				action: "new",
				userId: id
			},
    });
  }
 
}
