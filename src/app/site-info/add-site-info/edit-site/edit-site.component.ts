import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-edit-site',
  templateUrl: './edit-site.component.html',
  styleUrls: ['./edit-site.component.scss']
})
export class EditSiteComponent implements OnInit {
  editSitesForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EditSiteComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private logicalFormInfoService: LogicalFormInfoService
    ) { }

  ngOnInit(): void {
    this.editSitesForm = this.fb.group({
      siteName:[this.data.siteName],
      streetNumber:[this.data.streetNumber],
      streetAddress:[this.data.streetAddress],
      suburb:[this.data.suburb],
      state:[this.data.state],
    })
  }
  onSubmit(){
    console.log(this.editSitesForm.value)
    this.logicalFormInfoService.updateSite(this.data._id,this.editSitesForm.value).subscribe(res => {
      console.log(res);
      this.dialogRef.close('ok')
    })
  }

}
