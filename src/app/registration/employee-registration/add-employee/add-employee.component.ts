import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignaturePad } from 'angular2-signaturepad';
import { EmployeeRegistrationService } from 'src/app/utils/services/employee-registration.service';
import { RoleManagementService } from 'src/app/utils/services/role-management.service';
import { UploadFileService } from 'src/app/utils/services/upload-file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  empDetails!: FormGroup;
  PPERegister = false;
  LicenceInfo = false;
  dataEmp:boolean;
  formData:any;
  uploadImage1: any;
  uploadlicense1: any;
  submitted = false;
  id:any;
  profile = true;
  @ViewChild('signature1') signaturePad: any;
  sidePreview: any;
  registerForm: any;
  file1: any;
  dialogRef: any;
  dataUrl: any;
  roleData: any=[''];
 
  constructor(
    private fb: FormBuilder,
    private role: RoleManagementService,
    private employee: EmployeeRegistrationService,
    private upload: UploadFileService,
    private activatedRoute: ActivatedRoute,
    public router: Router
  ) {
    this.empDetails = this.fb.group({
      profTitie: ['', Validators.required],
      profFirst: ['', Validators.required],
      porfListName: ['', Validators.required],
      porfEmail: ['', Validators.required],
      porfPosition: ['', Validators.required],
      porfDepartment: ['', Validators.required],
      porfPhone: ['', Validators.required],
      porfMobile: ['', Validators.required],
      porfEmployee: ['', Validators.required],
      porfManager: ['', Validators.required],
      porfAdministrater: ['', Validators.required],
      file: ['', Validators.required],
      roleId:['', Validators.required],
      porfStreetAddress: ['', Validators.required],
      porfCityTown: ['', Validators.required],
      porfState: ['', Validators.required],
      porfPostalCode: ['', Validators.required],
      porfUploadImage: ['', Validators.required],
      EmpFirst: ['', Validators.required],
      empLastName: ['', Validators.required],
      empRelationship: ['', Validators.required],
      empEmail: ['', Validators.required],
      empPhone: ['', Validators.required],
      empMobile: ['', Validators.required],
      LicenceName: ['', Validators.required],
      LicenceNumber: ['', Validators.required],
      TrainingQrginisation: ['', Validators.required],
      ExpiryDate: ['', Validators.required],
      UploadLicenceArr: this.fb.array([]),
      PPESupplied: ['', Validators.required],
      BrandOrType: ['', Validators.required],
      IssueDate: ['', Validators.required],
      ReplacementDate: ['', Validators.required],
      Sign: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getAllRoles();
    this.id=this.activatedRoute.snapshot.params.id;
    if(this.id!=="form"){
      this.dataEmp=true;
    this.patchData();
  }else{
    this.dataEmp=false;
    this.addFiled();
  }
  }

  getAllRoles(){
    this.role.getAllRole().subscribe((res:any)=>{
      console.log("role..",res)
        this.roleData = res.data;
       
    });
  }
//   ngAfterViewInit() {
//     console.log("after..",this.signaturePad,this.dataUrl)
//     // this.signaturePad.set('minWidth', 1); // set szimek/signature_pad options at runtime
//     // this.signaturePad.clear();
//     // this.signaturePad.fromDataURL(this.dataUrl);
//    setTimeout(() => {
//     console.log("after10s..",this.signaturePad,this.dataUrl)
//    }, 10000);
//  }
  patchData(){
    this.employee.getEmployeeInfoById(this.id).subscribe((data) => {
      console.log('data=>', data);
      // this.signaturePad.toDataURL();
   data.data.licence.forEach(element => {
     element.uploadLicence.forEach(ele => {
      this.addFiled1(ele);
     });
     
   });
  
    this.empDetails.patchValue({
      profTitie: data.data.title,
      profFirst: data.data.firstName,
      porfListName:data.data.lastName,
      porfEmail: data.data.email,
      porfPosition:data.data.position,
      porfDepartment: data.data.department,
      porfPhone: data.data.phone,
      porfMobile: data.data.mobile,
     
      roleId: data.data.roleId,
      porfStreetAddress: data.data.location.address,
      porfCityTown: data.data.location.city,
      porfState: data.data.location.state,
      porfPostalCode: data.data.location.pincode,
      porfUploadImage: data.data.uploadImage,
      EmpFirst: data.data.emergencyContact.firstName,
      empLastName: data.data.emergencyContact.lastName,
      empRelationship: data.data.emergencyContact.relationship,
      empEmail: data.data.emergencyContact.email,
      empPhone: data.data.emergencyContact.phone,
      empMobile: data.data.emergencyContact.mobile,
     
      PPESupplied: data.data.ppe.ppeSupplied,
      BrandOrType: data.data.ppe.brand,
      IssueDate: data.data.ppe.issueDate,
      ReplacementDate: data.data.ppe.replacementDate,
      Sign: data.data.ppe.signature,
    });
   
    this.dataUrl = data.data.ppe.signature;
    console.log("data.data.ppe.signature;",data.data.ppe.signature);
    
    let check =async () => { this.signaturePad != null }
    check().then((res) => {
      console.log("this.signaturePad",this.signaturePad,res);
      
      this.signaturePad.fromDataURL(data.data.ppe.signature)

    })
    
  });
  }
  public signaturePadOptions: Object = {
    // passed through to szimek/signature_pad constructor
    minWidth: 1,
    canvasWidth: 500,
    canvasHeight: 100,
  };

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    this.empDetails.controls["Sign"].setValue(this.signaturePad.toDataURL())
    console.log(this.signaturePad.toDataURL());
  }

  clear() {
    this.signaturePad.clear();
  }
  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  browser(event,index) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);

      this.selectedImage = res.files;
      this.addLicence().at(index).get("file").patchValue(this.selectedImage)
      console.log(
        'AddProductComponent -> browse -> this.selectedImage',
        this.selectedImage
      );
    });
  }

  browser1(event) {
    const files = event.target.files[0];
    const formdata = new FormData();
    formdata.append('', files);
    console.log(files);

    this.upload.upload(formdata).subscribe((res) => {
      console.log('AddProductComponent -> browser -> res', res);

      this.file1 = res.files[0];
      console.log(
        'file',
        this.file1
      );
      this.empDetails.get("porfUploadImage").patchValue(this.file1)
     
    });
  }
  selectedImage(arg0: string, selectedImage: any) {
    throw new Error('Method not implemented.');
  }
 
  onFormUpdate(id) {
    const Sign = this.signaturePad.toDataURL();
    const data = {
      title: this.empDetails.get('profTitie').value,
      email: this.empDetails.get('porfEmail').value,
      position: this.empDetails.get('porfPosition').value,
      mobile: this.empDetails.get('porfMobile').value,
      roleId: this.empDetails.get('roleId').value,
      // designation: this.empDetails.get('porfEmployee').value,
      // deviceToken: '',
      department: this.empDetails.get('porfDepartment').value,
      phone: this.empDetails.get('porfPhone').value,
      firstName: this.empDetails.get('profFirst').value,
      lastName: this.empDetails.get('porfListName').value,
      uploadImage: this.empDetails.get('porfUploadImage').value,
      emergencyContact: {
        firstName: this.empDetails.get('EmpFirst').value,
        lastName: this.empDetails.get('empLastName').value,
        email: this.empDetails.get('empEmail').value,
        phone: this.empDetails.get('empPhone').value,
        mobile: this.empDetails.get('empMobile').value,
        relationship: this.empDetails.get('empRelationship').value,
      },
      licence: {
        licenceName: this.empDetails.get('LicenceName').value,
        licenceNumber: this.empDetails.get('LicenceNumber').value,
        trainingOrganisation: this.empDetails.get('TrainingQrginisation').value,
        expiryDate: this.empDetails.get('ExpiryDate').value,
        uploadLicence: this.empDetails.get('UploadLicenceArr').value,
      },
      ppe: {
        ppeSupplied: this.empDetails.get('PPESupplied').value,
        // licenceName: 'ghjhgjh',
        brand: this.empDetails.get('BrandOrType').value,
        issueDate: this.empDetails.get('IssueDate').value,
        replacementDate: this.empDetails.get('ReplacementDate').value,
        signature: Sign,
      },
      location: {
        address: this.empDetails.get('porfStreetAddress').value,
        landmark: 'Nagpur',
        state: this.empDetails.get('porfState').value,
        city: this.empDetails.get('porfCityTown').value,
        pincode: this.empDetails.get('porfPostalCode').value,
        country: 'India',
      },
    };
    
    this.employee
      .updateEmployeeInfo(this.id, data)
      .subscribe((resData) => {
        console.log('updateData', resData);
        Swal.fire({
          title: 'Employee Updated successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        this.router.navigate(["/admin/registration/employeeRegistration"]);
      });
  }
  onFormSubmit() {
    this.submitted = true;
    // if (!this.empDetails.controls.valid) {
    //   this.formData='formfield'
    // }
    const Sign = this.signaturePad.toDataURL();
    console.log('sign=>', this.signaturePad.toDataURL());

    console.log('this.EmployeeInfo.value', this.empDetails.value);
    const body = {
      title: this.empDetails.get('profTitie').value,
      email: this.empDetails.get('porfEmail').value,
      position: this.empDetails.get('porfPosition').value,
      mobile: this.empDetails.get('porfMobile').value,
      roleId: this.empDetails.get('roleId').value,
      // designation: this.empDetails.get('porfEmployee').value,
      // deviceToken: '',
      department: this.empDetails.get('porfDepartment').value,
      phone: this.empDetails.get('porfPhone').value,
      firstName: this.empDetails.get('profFirst').value,
      lastName: this.empDetails.get('porfListName').value,
      uploadImage: this.empDetails.get('porfUploadImage').value,
      emergencyContact: {
        firstName: this.empDetails.get('EmpFirst').value,
        lastName: this.empDetails.get('empLastName').value,
        email: this.empDetails.get('empEmail').value,
        phone: this.empDetails.get('empPhone').value,
        mobile: this.empDetails.get('empMobile').value,
        relationship: this.empDetails.get('empRelationship').value,
      },
      licence: {
        licenceName: this.empDetails.get('LicenceName').value,
        licenceNumber: this.empDetails.get('LicenceNumber').value,
        trainingOrganisation: this.empDetails.get('TrainingQrginisation').value,
        expiryDate: this.empDetails.get('ExpiryDate').value,
        uploadLicence: this.empDetails.get('UploadLicenceArr').value,
      },
      ppe: {
        ppeSupplied: this.empDetails.get('PPESupplied').value,
        // licenceName: 'ghjhgjh',
        brand: this.empDetails.get('BrandOrType').value,
        issueDate: this.empDetails.get('IssueDate').value,
        replacementDate: this.empDetails.get('ReplacementDate').value,
        signature: Sign,
      },
      location: {
        address: this.empDetails.get('porfStreetAddress').value,
        landmark: 'Nagpur',
        state: this.empDetails.get('porfState').value,
        city: this.empDetails.get('porfCityTown').value,
        pincode: this.empDetails.get('porfPostalCode').value,
        country: 'India',
      },
    };
  
    console.log('body=>', body);

    this.employee.addEmployeeInfo(body).subscribe((data) => {
      console.log('data=>', data);
      this.signaturePad.toDataURL();
      Swal.fire({
        title: 'Employee Added successfully',
        showConfirmButton: false,
        timer: 1200,
      });
      this.router.navigate(["/admin/registration/employeeRegistration"]);
    });
  }
  sign(sign: any) {
    throw new Error('Method not implemented.');
  }

  addAcionTab(event) {
    let b = Object.keys(this.sidePreview.value);
    //   let index =this.add().length
    //   this.addAction()
    // this.add().controls[index].get("item").setValue(event.target.value)

    //  console.log(this.sidePreview.controls[b[0]].value);
  }

  profileshow() {
    this.PPERegister = false;
    this.LicenceInfo = false;
    this.profile = true;
  }
  LicenceInfoshow() {
    this.PPERegister = false;
    this.LicenceInfo = true;
    this.profile = false;
  }
  PPERegisteshow() {
    this.PPERegister = true;
    this.LicenceInfo = false;
    this.profile = false;
  }
  addLicence() {
    return this.empDetails.get('UploadLicenceArr') as FormArray;
  }
  newFiled(): FormGroup {
    return this.fb.group({
      file: ['', Validators.required],
      LicenceName: ['', Validators.required],
      LicenceNumber: ['', Validators.required],
      TrainingQrginisation: ['', Validators.required],
      ExpiryDate: ['', Validators.required],
    });
  }
  newFiled1(data): FormGroup {
    return this.fb.group({
      file: [data.file],
      LicenceName:[ data.LicenceName],
      LicenceNumber: [data.LicenceNumber],
      TrainingQrginisation: [data.TrainingQrginisation],
      ExpiryDate: [data.ExpiryDate],
    });
  }
  addFiled1(data) {
    console.log("data",data);
    this.addLicence().push(this.newFiled1(data));
    console.log("addFiled1",this.empDetails.value);
  }
  addFiled() {
    this.addLicence().push(this.newFiled());
    console.log(this.empDetails.value);
  }
  removeFiled(i) {
    const item = <FormArray>this.empDetails.controls['UploadLicenceArr'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }

  get registerFormControl() {
    return this.empDetails.controls;
  }

}
