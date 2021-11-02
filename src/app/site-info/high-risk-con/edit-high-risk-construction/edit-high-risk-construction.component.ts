import { Component, OnInit, Inject } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
@Component({
  selector: 'app-edit-high-risk-construction',
  templateUrl: './edit-high-risk-construction.component.html',
  styleUrls: ['./edit-high-risk-construction.component.scss'],
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
  module = false;
  subModule = false;
  moduleName: boolean;
  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public upload: UploadFileServiceService,
    public router: Router,
    public dialogRef: MatDialogRef<EditHighRiskConstructionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.riskDetails = fb.group({
      arrObj: this.fb.array([]),
    });
    console.log('data =>', this.data);
  }

  ngOnInit(): void {
    this.addAction();
    console.log('data =>', this.data);

    this.add().at(0).patchValue({
      title: this.data.title,
    });
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
    let SubComponentData = {
      componentId: this.data.componentId,
      title: this.add().at(0).get('title')?.value,
    };
    console.log('SubComponent=>', SubComponentData);
    console.log('this.data.EditData=>',this.data.EditData);
    this.logicalFormInfo
      .editSubComponent(SubComponentData, this.data.EditData)
      .subscribe((resData) => {
        console.log('submodulesData', resData);

        this.dialogRef.close('true');
        Swal.fire({
          title: 'Parameter Edited successfully',
          showConfirmButton: false,
          timer: 1200,
        });
        this.riskDetails.reset();
      });
  }
}
