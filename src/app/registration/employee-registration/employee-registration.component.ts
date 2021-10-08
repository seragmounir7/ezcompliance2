import { UploadFileService } from './../../utils/services/upload-file.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignaturePad } from 'angular2-signaturepad';
import { ViewChild } from '@angular/core';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service'; 
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {
  empDetails!: FormGroup;
  PPERegister=false;
  LicenceInfo=false;
  uploadImage1:any;
  uploadlicense1:any;
  profile=true;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  sidePreview: any;
  constructor(private fb: FormBuilder, private employee:EmployeeRegistrationService, 
              private upload:UploadFileService) { 
    this.empDetails=this.fb.group({

      profTitie:['', Validators.required],
      profFirst:['', Validators.required],
      porfListName:['', Validators.required],
      porfEmail :['', Validators.required],
      porfPosition:['', Validators.required],
      porfDepartment:['', Validators.required],
      porfPhone: ['', Validators.required],
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
      Sign:['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.addFiled()
  }

  public signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 1,
    'canvasWidth': 500,
    'canvasHeight': 100,
  };

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
  }

  clear(){
    this.signaturePad.clear();
  }
    drawStart() {
      // will be notified of szimek/signature_pad's onBegin event
      console.log('begin drawing');
    }

    browser(event) {
    
      const files = event.target.files[0];
      const formdata= new FormData()
      formdata.append("",files) 
      console.log(files);
      
      this.upload
        .upload(formdata)
        .subscribe((res) => {
          console.log("AddProductComponent -> browser -> res", res);
         
          this.selectedImage = res.files;
         // this.HeaderInformation.get("uploadImage").patchValue(this.selectedImage)
          console.log(
            "AddProductComponent -> browse -> this.selectedImage",
            this.selectedImage
          );
        })
      }   

      browser1(event) {
    
        const files = event.target.files[0];
        const formdata= new FormData()
        formdata.append("",files) 
        console.log(files);
        
        this.upload
          .upload(formdata)
          .subscribe((res) => {
            console.log("AddProductComponent -> browser -> res", res);
           
            this.selectedImage = res.files;
           // this.HeaderInformation.get("uploadImage").patchValue(this.selectedImage)
            console.log(
              "AddProductComponent -> browse -> this.selectedImage",
              this.selectedImage
            );
          })
        } 
  selectedImage(arg0: string, selectedImage: any) {
    throw new Error('Method not implemented.');
  }
        
     
  onFormSubmit(){
    
    const Sign=this.signaturePad.toDataURL();
    console.log("sign=>", this.signaturePad.toDataURL());
    
    console.log("this.EmployeeInfo.value",this.empDetails.value)
    const body={
      "email": this.empDetails.get('porfEmail').value,
      "position": this.empDetails.get('porfPosition').value,
      "mobileNumber": this.empDetails.get('porfMobile').value,
     
      "designation": this.empDetails.get('porfEmployee').value,
      "deviceToken": "",
      "department": this.empDetails.get('porfDepartment').value,
      "phone": this.empDetails.get('porfPhone').value,
      "firstName": this.empDetails.get('profFirst').value,
      "lastName": this.empDetails.get('porfListName').value,
      "avatar": this.empDetails.get('porfUploadImage').value,
      "emergencyContact": {
          "firstName": this.empDetails.get('EmpFirst').value,
          "lastName": this.empDetails.get('empLastName').value,
          "email": this.empDetails.get('empEmail').value,
          "phone": this.empDetails.get('empPhone').value,
          "mobile": this.empDetails.get('empMobile').value,
          "relationship": this.empDetails.get('empRelationship').value,
      },
      "licence": {
          "licenceName": this.empDetails.get('LicenceName').value,
          "licenceNumber": this.empDetails.get('LicenceNumber').value,
          "trainingOrganisation": this.empDetails.get('TrainingQrginisation').value,
          "expiryDate": this.empDetails.get('ExpiryDate').value,
          "uploadLicence": this.empDetails.get('UploadLicenceArr').value,
      },
      "ppe": {
          "ppeSupplied": this.empDetails.get('PPESupplied').value,
          "licenceName": "ghjhgjh",
          "brand": this.empDetails.get('BrandOrType').value,
          "issueDate": this.empDetails.get('IssueDate').value,
          "replacementDate": this.empDetails.get('ReplacementDate').value,
          "signature": Sign,
      },
      "location": {
          "address": this.empDetails.get('porfStreetAddress').value,
          "landmark": "Nagpur",
          "state": this.empDetails.get('porfState').value,
          "city": this.empDetails.get('porfCityTown').value,
          "pincode": this.empDetails.get('porfPostalCode').value,
          "country": "India",
      }
  }
  // let body ={
  //   "email": "tkkkkg@gmail.com",
  //   "position": "11111",
  //   "mobileNumber": 7219090323,
  //   "designation": "Employee",
  //   "deviceToken": "qw",
  //   "department": "ab",
  //   "phone": 42424224,
  //   "firstName": "Abhishekh",
  //   "lastName": "kamble",
  //   "avatar": "image",
  //   "emergencyContact": {
  //       "firstName": "linkedin",
  //       "lastName": "ergdsf",
  //       "email": "twitter",
  //       "phone": "instagram",
  //       "mobile": "instagram"
  //   },
  //   "licence": {
  //       "licenceName": "linkedin",
  //       "licenceNumber": 125250,
  //       "trainingOrganisation": "twitter",
  //       "expiryDate": "instagram",
  //       "uploadLicence": "instagram"
  //   },
  //   "ppe": {
  //       "ppeSupplied": "linkedin",
  //       "licenceName": "sdfgdsfgdfb",
  //       "brand": "twitter",
  //       "issueDate": "instagram",
  //       "replacementDate": "instagram",
  //       "signature": "instagram"
  //   },
  //   "location": {
  //       "address": "Nagpur",
  //       "landmark": "Nagpur",
  //       "state": "Nagpur",
  //       "city": "Nagpur",
  //       "pincode": 25252,
  //       "country": "Nagpur"
  //   }
  // }
  console.log("body=>", body );
  
    this.employee.addEmployeeInfo(body).subscribe((data)=>{
console.log("data=>", data);
this.signaturePad.toDataURL();
    })
  }
  sign(sign: any) {
    throw new Error('Method not implemented.');
  }


  addAcionTab(event){
    
    let b= Object.keys(this.sidePreview.value)
  //   let index =this.add().length
  //   this.addAction()
  // this.add().controls[index].get("item").setValue(event.target.value)
 
  //  console.log(this.sidePreview.controls[b[0]].value);
   
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

function empEmail(empEmail: any) {
  throw new Error('Function not implemented.');
}

