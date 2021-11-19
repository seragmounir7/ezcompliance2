import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  addItem!: FormGroup;
  dataRec: any;
  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    public dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dataRec = data;
  }
  ngOnInit(): void {
    console.log(this.dataRec);
    
    this.addItem = this.fb.group({
      title: ['', Validators.required],
    });
  }
  closeDialog(){
    this.dialogRef.close('false');

  }
onSubmit(){
  this.dialogRef.close(this.addItem.get('title').value);
  Swal.fire({
    title: 'Item  Added successfully',
    showConfirmButton: false,
    timer: 1200,
  }); 
}
}
