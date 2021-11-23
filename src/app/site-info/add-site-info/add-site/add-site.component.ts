import { value } from './../../../views/dynamic-form/global.model';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {
allState=[];
  addSitesForm
  constructor( 
    private dialogRef: MatDialogRef<AddSiteComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,
    private fb:FormBuilder,
    private logicalFormInfoService: LogicalFormInfoService
    ) { }

  ngOnInit(): void {
    this.getAllStates();
    this.addSitesForm = this.fb.group({
      siteName:[''],
      streetNumber:[''],
      streetAddress:[''],
      suburb:[''],
      state:[],
    })
  }
  getAllStates() {
    this.logicalFormInfoService.getAllStates().subscribe((res) => {
      console.log('getAllStates=>', res);
  this.allState=res.data;
    });
 
  }

    onSubmit(){
      console.log(this.addSitesForm.value)
      this.logicalFormInfoService.addSite(this.addSitesForm.value).subscribe(res => {
        console.log(res);
        this.dialogRef.close('true');
        Swal.fire({
          title: 'Site Added successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      });
    }
    close() {
      this.dialogRef.close();
  }
}
