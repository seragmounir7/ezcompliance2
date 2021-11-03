import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';

@Component({
  selector: 'app-edit-ppeselect',
  templateUrl: './edit-ppeselect.component.html',
  styleUrls: ['./edit-ppeselect.component.scss']
})
export class EditPPEselectComponent implements OnInit {
  PPEdetails: FormGroup;
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
    public dialogRef: MatDialogRef<EditPPEselectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.PPEdetails = fb.group({
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
      this.PPEdetails.patchValue({
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
    return this.PPEdetails.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({

      title: ['', Validators.required],
    });
  }

  removeSafetyModule(i) {
    const item = <FormArray>this.PPEdetails.controls['arrObj'];
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
          this.PPEdetails.reset();
        });
    }
  }


}
