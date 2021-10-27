import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ParamMap } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog'
@Component({
  selector: 'app-edit-high-risk-construction',
  templateUrl: './edit-high-risk-construction.component.html',
  styleUrls: ['./edit-high-risk-construction.component.scss']
})
export class EditHighRiskConstructionComponent implements OnInit {
  riskDetails: FormGroup;
  myId: boolean;
  Is_subMod: boolean;
  isEdit = false;
  enum: any;
  subId: any;
  riskData: any;
  Is_Mod: any;
  Edit = false;
  Add = false;
  type: string = '';
  Update = false;
  module = false;
  subModule = false;
  moduleName: boolean;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    public router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<EditHighRiskConstructionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.riskDetails = fb.group({
      arrObj: this.fb.array([]),

      mode: 'Risk',
    });
    console.log('data action=>', this.data.action);
  }

  ngOnInit(): void {
    this.addAction();
    console.log('data action=>', this.data.action);
    if (this.data.action == 'edit') {
      this.Update = true;
      console.log('data to patch=>', this.data);
      this.riskDetails.patchValue({
        mode: 'Risk',

      });
      this.add().at(0).patchValue({
        title: this.data.EditData.subComponents[this.data.index].title,

      });

    }

    let index = this.data.index;
    this.subId = this.data.EditData.subComponents[index]._id;

    console.log('subId=>', this.subId);
  }


  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.riskDetails.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({

      title: ['', Validators.required],
    });
  }

  removeSafetyModule(i) {
    const item = <FormArray>this.riskDetails.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);

    }
  }
  onFormSubmit() {
    console.log('data action=>', this.data.action);
    this.editSubComponent();
  }
  editSubComponent() {
    if (this.data.action == 'edit') {
      let SubComponentData = {
        componentId: this.data.EditData._id,
        title: this.add().at(0).get('title')?.value,

      };
      console.log('SubComponent=>', SubComponentData);
      console.log('this.EditData', this.data.EditData._id);
      this.landingPageInfo
        .editSubComponent(SubComponentData, this.subId)
        .subscribe((resData) => {
          console.log('submodulesData', resData);

          this.dialogRef.close('true');
          this.riskDetails.reset();
        });
    }
  }

}
