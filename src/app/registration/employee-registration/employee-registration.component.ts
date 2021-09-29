import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
  empDetails!: FormGroup;
  PPERegister=false;
  LicenceInfo=false;
  profile=true;
  constructor(private fb: FormBuilder) { 
    this.empDetails=this.fb.group({

      profTitie:['', Validators.required],
      profFirst:['', Validators.required],
      porfListName:['', Validators.required],
      porfEmail :['', Validators.required],
      porfPosition:['', Validators.required],
      porfDepartment:['', Validators.required],
      porfMobile:['', Validators.required],
      porfEmployee:['', Validators.required],
      porfManager :['', Validators.required],
      porfAdministrater :['', Validators.required],
      porfStreetAddress:['', Validators.required],
      porfCityTown:['', Validators.required],
      porfState :['', Validators.required],
      porfPostalCode:['', Validators.required],
      porfUploadImage:['', Validators.required],
      EmpFirst:['', Validators.required],
      empLastName :['', Validators.required],
      empRelationship:['', Validators.required],
      empEmail:['', Validators.required],
      empPhone :['', Validators.required],
      empMobile:['', Validators.required],
      LicenceName:['', Validators.required],
      LicenceNumber:['', Validators.required],
      TrainingQrginisation:['', Validators.required],
      ExpiryDate:['', Validators.required],
      UploadLicenceArr: this.fb.array([]),
      PPESupplied:['', Validators.required],
      BrandOrType:['', Validators.required],
      IssueDate:['', Validators.required],
      ReplacementDate:['', Validators.required],
      Signature:['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.addFiled()
  }



  profileshow(){
   this. PPERegister=false;
   this. LicenceInfo=false;
   this. profile=true;
  }
  LicenceInfoshow(){
   this. PPERegister=false;
   this. LicenceInfo=true;
   this. profile=false;
  }
  PPERegisteshow(){
    this.PPERegister=true;
    this.LicenceInfo=false;
    this.profile=false;
  }
addLicence(){
  return this.empDetails.get('UploadLicenceArr') as FormArray;
}
newFiled(): FormGroup {
  return this.fb.group({
    file: ['', Validators.required],
  });
}
addFiled() {
  
   this.addLicence().push(this.newFiled());
  console.log(this.empDetails.value);
  
} 
   

}

