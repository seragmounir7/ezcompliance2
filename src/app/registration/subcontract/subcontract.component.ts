import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap } from 'rxjs/operators';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { UploadFileService } from 'src/app/utils/services/upload-file.service';

@Component({
  selector: 'app-subcontract',
  templateUrl: './subcontract.component.html',
  styleUrls: ['./subcontract.component.scss']
})
export class SubcontractComponent implements OnInit {
  subcontractDetails!: FormGroup;
  selectedImage: any;
  LicenceInfo = false;
  profile = false;
  dataEmp: boolean;
  filteredOptions2: Observable<any>;
  constructor(
    private fb: FormBuilder,
    private upload: UploadFileService,
    private licenceInfo: LogicalFormInfoService,
  ) {
    this.subcontractDetails = this.fb.group({
      companyName: ['', Validators.required],
      phone: ['', Validators.required],
      fax: ['', Validators.required],
      email: ['', Validators.required],
      suburb: ['', Validators.required],
      postCode: ['', Validators.required],
      mailingAddress: ['', Validators.required],
      streetAddress: ['', Validators.required],
      ABN: ['', Validators.required],
  
      file: [''],
      licenceNumber: ['', Validators.required],
      website: ['', Validators.required],
     
      LicenceName: [''],

      LicenceNumber: [''],
      TrainingQrginisation: [''],
      ExpiryDate: [''],
      UploadLicenceArr: this.fb.array([]),
     
    });
   }

  ngOnInit(): void {
    this.addFiled();
    this.filteredOptions2 = this.subcontractDetails.controls.LicenceName.valueChanges.pipe(
      startWith(''),
      debounceTime(800),
      distinctUntilChanged(),
      switchMap(val => {
        console.log("myControl22..", val, this.filteredOptions2)
        return this.filter2(val || '')
      })
    )
  }
  addLicence() {
    return this.subcontractDetails.get('UploadLicenceArr') as FormArray;
  }
  newFiled(): FormGroup {
    return this.fb.group({
      file: [''],
      LicenceName: [''],
      LicenceNumber: [''],
      TrainingQrginisation: [''],
      ExpiryDate: [''],
    });
  }
  newFiled1(data): FormGroup {
    return this.fb.group({
      file: [data.file],
      LicenceName: [data.LicenceName],
      LicenceNumber: [data.LicenceNumber],
      TrainingQrginisation: [data.TrainingQrginisation],
      ExpiryDate: [data.ExpiryDate],
    });
  }
  addFiled1(data) {
    this.addLicence().push(this.newFiled1(data));
  }
  addFiled() {
    this.addLicence().push(this.newFiled());
  }
  removeFiled(i) {
    const item = <FormArray>this.subcontractDetails.controls['UploadLicenceArr'];
    if (item.length > 1) {
      item.removeAt(i);

    }
  }
  browser(event, index) {
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
  profileshow() {
    this.LicenceInfo = false;
    this.profile = true;
  }
  LicenceInfoshow() {
    this.LicenceInfo = true;
    this.profile = false;
  }
  filter2(val: string): Observable<any> {
    return this.licenceInfo.getAllLicence()
      .pipe(map((res) => {
        res.data = res.data.map((item) => {
          item.LicenceName = `${item.title}`
          return item
        })
        return res
      }),
        map((response: any) => {
          response.data = response.data.filter(option => {
            return option.LicenceName.toLowerCase().indexOf(val.toLowerCase()) === 0
          })

          return response.data;
        })
      )
  }
  displayFn(user: any): string {
    return user && user.title ? user.title : '';
  }
}
