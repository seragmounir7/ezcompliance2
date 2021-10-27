import { Component, OnInit, Inject } from '@angular/core';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  FormControl,
} from '@angular/forms'
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-add-high-risk-construction',
  templateUrl: './add-high-risk-construction.component.html',
  styleUrls: ['./add-high-risk-construction.component.scss']
})
export class AddHighRiskConstructionComponent implements OnInit {
  riskDetails!: FormGroup;
  riskData: any = [];
  ID: any;
  hide: boolean = true;
  constructor(private LandingPageInfoService: LandingPageInfoServiceService,
    private fb: FormBuilder, public dialogRef: MatDialogRef<AddHighRiskConstructionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    {
      this.riskDetails = this.fb.group({
        componentId: this.data.EditData,
        title: ['', Validators.required],
      });
      console.log('riskDetails=>', this.riskDetails);
    }

  }


  ngOnInit(): void {

  }

  onFormSubmit() {
    console.log(this.riskDetails);
    let data = {
      componentId: this.data.EditData,
      title: this.riskDetails.get('title').value,
    }
    this.LandingPageInfoService.addSubComponent(data).subscribe((data) => {
      console.log('riskDetails=>', data);
      this.riskData = data;
      this.dialogRef.close('true');
      this.riskDetails.reset();
    });
  }
}
