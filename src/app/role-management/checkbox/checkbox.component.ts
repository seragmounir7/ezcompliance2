import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  roles = [
    { value: "SuperAdmin",name:"SuperAdmin", checked: false },
    { value: "Admin", name:"Admin",checked: false },
    { value: "Employee", name:"Employee",checked: false },
    { value: "Adminstration",name:"Adminstration", checked: false },
   
  ];

  doCheckboxCheck(index: number): void {
    this.roles[index].checked = !this.roles[index].checked;
  }
}
