import { element } from 'protractor';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-terms-and-conditions',
  templateUrl: './add-terms-and-conditions.component.html',
  styleUrls: ['./add-terms-and-conditions.component.scss']
})
export class AddTermsAndConditionsComponent implements OnInit {
  public Editor = ClassicEditor;
  addTerms: FormGroup;
  formData: any;
  numberOfLineBreaks: any;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo: LogicalFormInfoService,
    private dialogRef: MatDialogRef<AddTermsAndConditionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.addTerms = this.fb.group({
      termsAndCond: ['', Validators.required],

    });

  }

  ngOnInit(): void {
    if (this.data.element.termsAndCond) {
      this.addTerms.controls['termsAndCond'].setValue(this.data.element.termsAndCond)
    }

  }



  onFormSubmit() {
    console.log(this.addTerms.value);
    this.logicalFormInfo.postTermsAndConditions(this.addTerms.value).subscribe((data) => {
      console.log('nature=>', data);
      this.router.navigate(['/admin/siteInfo/termsAndcondition']);
      this.dialogRef.close("true")
    }, (err) => { console.error(err); }

    );

  }
  closeDialog() {
    this.dialogRef.close('false');

  }

}
