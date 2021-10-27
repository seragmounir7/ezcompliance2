import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.scss']
})
export class ViewContactComponent implements OnInit {
  contactUsForm!: FormGroup;
  contactDetail:any;
  dataContact: any;
  constructor(
    private url: LandingPageInfoServiceService,
    private dialogRef: MatDialogRef<ViewContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data1: any,
    private fb: FormBuilder,
  ) {
    this.dataContact = data1.headerData; 
   }

  ngOnInit(): void {
    this.contactUsForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      query: ['', Validators.required],
      
    });
    if(this.data1.action=="view"){
      this.contactUsForm.patchValue({
        "fullName": this.data1.headerData.fullname,
        "phone": this.data1.headerData.phone,
        "email": this.data1.headerData.email,
        "query": this.data1.headerData.query,

      })
    }
  }
  getContact() {
    // this.myId= '61743207ad581a5f5d60d90a';
    this.url.getContact().subscribe((data) => {
      console.log('mode=>', data);
      this.dataContact = data.data;
      
    });
  }
}
