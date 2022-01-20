import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, switchMap, tap } from 'rxjs/operators';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { UploadFileService } from 'src/app/utils/services/upload-file.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-and-edit-subcontract',
  templateUrl: './add-and-edit-subcontract.component.html',
  styleUrls: ['./add-and-edit-subcontract.component.scss']
})
export class AddAndEditSubcontractComponent implements OnInit {
  subcontractDetails!: FormGroup;
  selectedImage: any;
  LicenceInfo = false;
  profile = false;
  dataEmp: boolean;
  filteredOptions2: Observable<any>;
  licenceData: any[]=[];
  licenceValueChanges: Observable<any>[];
  submitted: boolean;
  id: any;
  constructor(
    private fb: FormBuilder,
    private upload: UploadFileService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    private licenceInfo: LogicalFormInfoService,
  ) {
    this.subcontractDetails = this.fb.group({
      companyName: ['', Validators.required],
      phone: ['', Validators.required],
      fax: [''],
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
      licenceAndQualifications: this.fb.array([]),
     
    });
   }

  ngOnInit(): void {
    
    this.id = this.activatedRoute.snapshot.params.id;

    if (this.id !== "form") {
      this.licenceInfo.getAllLicence().pipe(
        map((res) => {
          return res.data.map((item) => {
            item.fullName = `${item.title}`
            return item
          })
        })
      ).subscribe(empData => {
        this.licenceData = empData
        console.log('this.empData', this.licenceData)
        
      })
      this.dataEmp = true;
      this.patchData();
    } else {
      this.dataEmp = false;
      this.licenceInfo.getAllLicence().pipe(
        map((res) => {
          return res.data.map((item) => {
            item.fullName = `${item.title}`
            return item
          })
        })
      ).subscribe(empData => {
        this.licenceData = empData
        console.log('this.empData', this.licenceData)
        this.addFiled();
      })
     
    }
    // this.addFiled();
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
    return this.subcontractDetails.get('licenceAndQualifications') as FormArray;
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
    this.licenceValueChanges =new Array<Observable<any>>()
    for (let index = 0; index < this.addLicence().length; index++) {
      let element = this.addLicence().at(index)
     this.licenceValueChanges.push( (element['controls'].LicenceName.valueChanges as Observable<any>).pipe(
      startWith(''),
      debounceTime(400),
      tap(value => console.log('value', value)),
      map(value => (typeof value === 'string' ? value : value.fullName)),
      map(fullName => (fullName ? this._filter(fullName) : this.licenceData.slice())),
    ))
      console.log(element.valueChanges)
    }
  }
  addFiled() {
    this.addLicence().push(this.newFiled());
    this.licenceValueChanges =new Array<Observable<any>>()
    for (let index = 0; index < this.addLicence().length; index++) {
      let element = this.addLicence().at(index)
     this.licenceValueChanges.push( (element['controls'].LicenceName.valueChanges as Observable<any>).pipe(
      startWith(''),
      debounceTime(400),
      tap(value => console.log('value', value)),
      map(value => (typeof value === 'string' ? value : value.fullName)),
      map(fullName => (fullName ? this._filter(fullName) : this.licenceData.slice())),
    ))
      console.log(element.valueChanges)
    }
    // this.licenceValueChanges.map(x => {
    //   x.pipe(
    //     startWith(''),
    //     debounceTime(400),
    //     tap(value => console.log('value', value)),
    //     map(value => (typeof value === 'string' ? value : value.fullName)),
    //     map(fullName => (fullName ? this._filter(fullName) : this.empData.slice())),
    //   )
    // })
  }
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    return this.licenceData.filter(option => option.fullName.toLowerCase().includes(filterValue));
  }
  removeFiled(i) {
    const item = <FormArray>this.subcontractDetails.controls['licenceAndQualifications'];
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
  patchData() {
    this.licenceInfo.getSubcontract(this.id).subscribe((res:any) => {
      console.log('dataId=>', res.data);
     
      // res.data.licenceAndQualifications.forEach(ele => {
      //   this.addFiled1(ele);
      // });
      res.data.licenceAndQualifications.length > 0 ? res.data.licenceAndQualifications.forEach(ele => {
        this.addFiled1(ele);
      }):this.addFiled();

      this.subcontractDetails.patchValue({
        // LicenceName: res.data.licenceAndQualifications.LicenceName,
        // LicenceNumber: res.data.licenceAndQualifications.LicenceNumber,
        // TrainingQrginisation: res.data.licenceAndQualifications.TrainingQrginisation,
        // ExpiryDate: res.data.licenceAndQualifications.ExpiryDate,
        companyName: res.data.companyName,
        phone: res.data.companyName,
        fax: res.data.companyName,
        email: res.data.companyName,
        streetAddress: res.data.companyName,
        suburb: res.data.companyName,
        postCode: res.data.companyName,
        mailingAddress: res.data.companyName,
        ABN: res.data.companyName,
        licenceNumber: res.data.companyName,
        website: res.data.companyName,
       
      });

     
    });
  }
  onFormSubmit() {
    this.submitted = true;
    // if (!this.empDetails.controls.valid) {
    //   this.formData='formfield'
    // }
    
    let licenceArr = () => {
      this.addLicence().length;
      let arr = [];
      this.addLicence().controls.forEach((item: any) => {
        console.log("item", item);
        arr.push(
          {
            LicenceName: item.controls.LicenceName.value,
            LicenceNumber: item.controls.LicenceNumber.value,
            TrainingQrginisation: item.controls.TrainingQrginisation.value,
            ExpiryDate: item.controls.ExpiryDate.value,
            file: item.controls.file.value,
          },

        )
      })
      return arr;
    }
    const body = {
      licenceAndQualifications: licenceArr(),
    companyName: this.subcontractDetails.get('companyName').value,
    phone: this.subcontractDetails.get('phone').value,
    fax: this.subcontractDetails.get('fax').value,
    email: this.subcontractDetails.get('email').value,
    streetAddress: this.subcontractDetails.get('streetAddress').value,
    suburb: this.subcontractDetails.get('suburb').value,
    postCode: this.subcontractDetails.get('postCode').value,
    mailingAddress: this.subcontractDetails.get('mailingAddress').value,
    ABN: this.subcontractDetails.get('ABN').value,
    licenceNumber: this.subcontractDetails.get('licenceNumber').value,
    website: this.subcontractDetails.get('website').value,
     
    };

    console.log('body=>', body);

    this.licenceInfo.addSubcontract(body).subscribe((data) => {
      console.log('data=>', data);
      
      Swal.fire({
        title: 'Subcontractor Added successfully',
        showConfirmButton: false,
        timer: 1200,
      });
      this.router.navigate(["/admin/registration/subcontract"]);
    }, (err) => {
      console.error(err);
    });
  }
  onFormUpdate(id) {
    let licenceArr = () => {
      this.addLicence().length;
      let arr = [];
      this.addLicence().controls.forEach((item: any) => {
        console.log("item", item);
        arr.push(
          {
            LicenceName: item.controls.LicenceName.value,
            LicenceNumber: item.controls.LicenceNumber.value,
            TrainingQrginisation: item.controls.TrainingQrginisation.value,
            ExpiryDate: item.controls.ExpiryDate.value,
            file: item.controls.file.value,
          },

        )
      })
      return arr;
    }
    const body = {
      licenceAndQualifications: licenceArr(),
    companyName: this.subcontractDetails.get('companyName').value,
    phone: this.subcontractDetails.get('phone').value,
    fax: this.subcontractDetails.get('fax').value,
    email: this.subcontractDetails.get('email').value,
    streetAddress: this.subcontractDetails.get('streetAddress').value,
    suburb: this.subcontractDetails.get('suburb').value,
    postCode: this.subcontractDetails.get('postCode').value,
    mailingAddress: this.subcontractDetails.get('mailingAddress').value,
    ABN: this.subcontractDetails.get('ABN').value,
    licenceNumber: this.subcontractDetails.get('licenceNumber').value,
    website: this.subcontractDetails.get('website').value,
     
    };

    console.log('body=>', body);


    this.licenceInfo
      .updateSubcontract(this.id, body)
      .subscribe((resData) => {
        console.log('updateData', resData);
        Swal.fire({
          title: 'Subcontractor Updated successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        this.router.navigate(["/admin/registration/subcontract"]);
      }, (err) => {
        console.error(err);
      });
  }
}