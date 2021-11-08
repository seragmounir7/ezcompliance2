import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-cust',
  templateUrl: './edit-cust.component.html',
  styleUrls: ['./edit-cust.component.scss']
})
export class EditCustComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EditCustComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }

}
