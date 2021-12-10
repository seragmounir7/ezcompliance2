import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import {FormBuilder,FormGroup,Validators,FormArray,FormControl,} from '@angular/forms';
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  displayedColumns: string[] = ["role",'Dynamicform',"Logicalforms","FormConfigure","SubscriptionRates",'LogicalFormData','CMS','StateRelation'];
  showDatas: any;
  tempArray: MatTableDataSource <any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input()Arry:any;
  @Output()Arry1:any

  constructor() { }
  roles = [
    { value: "SuperAdmin",name:"SuperAdmin", Dynamicform:false,Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false},
    { value: "Admin", name:"Admin",Dynamicform:false,Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false },
    { value: "Employee", name:"Employee",Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false },
    { value: "Adminstration",name:"Adminstration",Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false },
   
  ];

  ngOnInit(): void {
    this.tempArray = new MatTableDataSource<any>(this.roles);
      this.tempArray.paginator = this.paginator;
      this.tempArray.sort = this.sort; 
  }
  

  doCheckboxCheck(index: number): void {
   // this.roles[index].checked = !this.roles[index].checked;
  }
  applyFilter($event){

  } 
  ngOnChanges(changes: any): void {

    
  }
}
