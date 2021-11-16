import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service'; 
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service'; 
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedImage: any;
  HeaderInformation!: FormGroup;
  serviceDetail: any;
  serviceData: any;
  myId: any;
  isEdit: boolean;
  data: any;
  dataHeader: any;
  headerId: any;
  infoData: any;
  constructor(
    private url: LandingPageInfoServiceService,
    private dialogRef: MatDialogRef<HeaderComponent>,
		@Inject(MAT_DIALOG_DATA) public data1: any,
    private fb: FormBuilder,
    public upload: UploadFileServiceService,) { 
      this.dataHeader = data1.headerData;
    }

  ngOnInit(): void {
    this.getHeaderById();
    console.log("data1",this.data1);
    
    this.HeaderInformation = this.fb.group({
      fileUrl:  ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
     
    }); if(this.data1.action=="edit"){
      this.selectedImage= this.dataHeader.fileUrl,
      this.HeaderInformation.patchValue({
        description: this.dataHeader.description,
       
        title: this.dataHeader.title,
      })
    }
  }

  onSubmit() {
    this.HeaderInformation.get('fileUrl')?.setValue(
      this.selectedImage
    );
    console.log(this.HeaderInformation.value);
    let data = {
      // "title": this.HeaderInformation.get("heading").value,
      // "description":  this.HeaderInformation.get("description").value,
      // "fileUrl":this.HeaderInformation.get("uploadImage").value,
    };
    console.log(this.HeaderInformation.value);
    this.url.AddHeader(this.HeaderInformation.value).subscribe((res) => {
      
      console.log('AddProductComponent -> browser -> res', res);
      // this.studDetail.patchValue({
      //   filePath: res.filePath,
      // // });
      // this.selectedImage = res.file[0];
      // console.log(
      //   "AddProductComponent -> browse -> this.selectedImage",
      //   this.selectedImage
      //);
    });
  }
  browser(event) {
        const files = event.target.files[0];
        const formdata = new FormData();
        formdata.append('', files);
        console.log(files);
    
        this.upload.upload(formdata).subscribe((res) => {
          console.log('AddProductComponent -> browser -> res', res);
          // this.HeaderInformation.get("uploadImage").value
          // this.studDetail.patchValue({
          //   filePath: res.filePath,
          // });
          this.selectedImage=res.files[0];
          // this.HeaderInformation.get("uploadImage").patchValue(this.selectedImage)
          console.log(
            'AddProductComponent -> browse -> this.selectedImage',
            this.selectedImage
          );
        });
      }

      getHeaderById() {
        this.url.getHeaderBYId().subscribe((data) => {
          console.log('mode=>', data);
          this.infoData = data.data;
        });
      }
      
  editHeaderInfo(id) {
        console.log("id=>",id);
        this.myId = this.dataHeader._id;
        this.HeaderInformation.get("fileUrl").setValue(this.selectedImage);
        console.log("form",this.HeaderInformation.value);
        
        this.isEdit = true;
        this.url.editHeader(this.myId,this.HeaderInformation.value).subscribe((res) => {
          Swal.fire(' Edited Successfully')
          console.log('Data Set response' + res);
          this.data = res.data;
          console.log('new response' + this.data);
          this.dialogRef.close("true");

        });
      }
      close() {
        this.dialogRef.close();
    }
  onFormSubmit() {
    let value = this.selectedImage[0];
    console.log('value', value);
    
    let serviceData = {};

    console.log('file: ~ onFormSubmit ~ data', serviceData);

    this.url
      .AddHeader(this.HeaderInformation.value)
      .subscribe((data) => {
        console.log('data=>', data);
        this.serviceData = data;
      });
  }
 
}
 

