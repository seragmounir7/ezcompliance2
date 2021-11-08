import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-site',
  templateUrl: './add-site.component.html',
  styleUrls: ['./add-site.component.scss']
})
export class AddSiteComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<AddSiteComponent>,
		@Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
  }
  state = [
      { label: 'New South Wales', value: '' },
      { label: 'Queensland', value: '' },
      { label: 'South Australia', value: '' },
      { label: 'Tasmania', value: '' },
      { label: 'Victoria', value: '' },
      { label: 'Western Australia', value: '' },
    ];
}
