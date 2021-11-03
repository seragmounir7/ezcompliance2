import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';

@Component({
  selector: 'app-add-ppeselect',
  templateUrl: './add-ppeselect.component.html',
  styleUrls: ['./add-ppeselect.component.scss']
})
export class AddPPEselectComponent implements OnInit {
  PPEdetails!: FormGroup;
  riskData: any = [];
  ID: any;
  hide: boolean = true;
  constructor(private LandingPageInfoService: LandingPageInfoServiceService,
    private fb: FormBuilder, public dialogRef: MatDialogRef<AddPPEselectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    {
      this.PPEdetails = this.fb.group({
        componentId: this.data.EditData,
        title: ['', Validators.required],
      });
      console.log('PPEdetails=>', this.PPEdetails);
    }

  }


  ngOnInit(): void {

  }

  onFormSubmit() {
    console.log(this.PPEdetails);
    let data = {
      componentId: this.data.EditData,
      title: this.PPEdetails.get('title').value,
    }
    this.LandingPageInfoService.addSubComponent(data).subscribe((data) => {
      console.log('PPEdetails=>', data);
      this.riskData = data;
      this.dialogRef.close('true');
      this.PPEdetails.reset();
    });
  }

}
