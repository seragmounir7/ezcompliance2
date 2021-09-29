import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  categories= [
    {value: 'Category1', viewValue: 'Category1'},
    {value: 'Category2', viewValue: 'Category2'},
    {value: 'Category3', viewValue: 'Category3'},
    {value: 'Category4', viewValue: 'Category4'},
    {value: 'Category5', viewValue: 'Category5'},
    {value: 'Category6', viewValue: 'Category6'},

  ];
  constructor(
    public dialogRef: MatDialogRef<AddFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    console.log("data",this.data);
    
  }
}
