import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  addForm: FormGroup;
  constructor(
    public router: Router,
    public dialogRef: MatDialogRef<AddFormComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    console.log('data', this.data);
    this.addForm = this.fb.group({
      formName: ['', Validators.required],
      frequency: ['', Validators.required],
    });
  }
  createForm() {
    sessionStorage.setItem('type', 'add');
    sessionStorage.setItem('formTitle', this.addForm.get('formName').value);
    sessionStorage.setItem('frequency', this.addForm.get('frequency').value);
    // this.dialogRef.close(this.addForm.get('formName').value,this.addForm.get('frequency').value);
    this.router.navigate(['/admin/dynamicForm']);
    this.dialogRef.close();

  }
  closeDialog() {
    this.dialogRef.close('false');
  }
}
