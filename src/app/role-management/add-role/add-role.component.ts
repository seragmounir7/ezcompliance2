import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  Validators,

} from '@angular/forms';
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  addRole!: FormGroup;
  constructor(
    private fb: FormBuilder,

    public dialogRef: MatDialogRef<AddRoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.addRole = this.fb.group({
    
      name: ['', Validators.required],
    
     
    });
    console.log('', data);
  }
  

  ngOnInit(): void {
   
  }
  onSubmit() {
    console.log(this.addRole.value)
    Swal.fire('Added Successfully')
    this.dialogRef.close();
  }
  close() {
    this.dialogRef.close();
  }

}
