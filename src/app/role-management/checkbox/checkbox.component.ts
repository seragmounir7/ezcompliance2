import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import {FormBuilder,FormGroup,Validators,FormArray,FormControl,} from '@angular/forms';
import{RoleManagementService}from '../../utils/services/role-management.service'
@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
 // displayedColumns: string[] = ["role",'dynamicform',"Logicalforms","FormConfigure","SubscriptionRates",'LogicalFormData','CMS','StateRelation'];
 rolemanagment: FormGroup;
 
 displayedColumns: string[] = [
  "role",

  "dashboard.Access",
  "dashboard.View",

  "dynamicForm.Access",
  "dynamicForm.Add",
  "dynamicForm.Delete",
  "dynamicForm.Update",
  "dynamicForm.View",

  "Logicalforms.Access",
  "Logicalforms.Add",
  "Logicalforms.Delete",
  "Logicalforms.Update",
  "Logicalforms.View",

  "FormConfigure.Access",
  "FormConfigure.Add",
  "FormConfigure.Delete",
  "FormConfigure.Update",
  "FormConfigure.View",

  "SubscriptionRates.Access",
  "SubscriptionRates.Add",
  "SubscriptionRates.Delete",
  "SubscriptionRates.Update",
  "SubscriptionRates.View",

  "LogicalFormData.Access",
  "LogicalFormData.Add",
  "LogicalFormData.Delete",
  "LogicalFormData.Update",
  "LogicalFormData.View",

  "CMS.Access",
  "CMS.Add",
  "CMS.Delete",
  "CMS.Update",
  "CMS.View",

  "StateRelation.Access",
  "StateRelation.Add",
  "StateRelation.Delete",
  "StateRelation.Update",
  "StateRelation.View",

  
];
 showDatas: any;
  tempArray: MatTableDataSource <any>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @Input()Arry:any;
  @Output()Arry1:any;
  roleArr:any;
  formArr=false;

  constructor(
    private fb:FormBuilder,
    private roleService :RoleManagementService,
    
    ) { 
      //this.getAllRole()
    // this.rolemanagment = this.fb.group({
    
    // [this.roleArr[0].role+"form"]:[''],
    // [this.roleArr[0].role+"view"]:[''],
    // [this.roleArr[0].role+"add"]:[''],
    // [this.roleArr[0].role+"update"]:[''],
    // [this.roleArr[0].role+"delete"]:[''],
       
    // });
  }
  // roles = [
  //   { value: "SuperAdmin",name:"SuperAdmin", Dynamicform:false,Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false},
  //   { value: "Admin", name:"Admin",Dynamicform:false,Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false },
  //   { value: "Employee", name:"Employee",Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false },
  //   { value: "Adminstration",name:"Adminstration",Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false },
  //   { value: "Worker",name:"Worker",Logicalforms:false,FormConfigure:false,SubscriptionRates:false,LogicalFormData:false,CMS:false,StateRelation:false },
  // ];
  // chickbox:string[]=[
  //   'view','add','delete','update'
  // ]
  // titel:string[]=[
  //   'view','add','delete','update'
  // ]


  ELEMENT_DATA: any[] = [
    {
      role: "SuperAdmin",
      id: 1
    },
    {
      role: "Admin",
      id: 2
    },
    {
      role: "Employee",
      id: 3
    },
    {
      role: "Adminstration",
      id:4
    },
    {
      role: "Worker",
      id:5
    },
    
  ];

  ngOnInit(): void {
   
    this.getAllRole()
  }
  ngAfterViewInit() {
    // this.tempArray.paginator = this.paginator;
  }

  doCheckboxCheck(e): void {
   // this.roles[index].checked = !this.roles[index].checked;
   console.log("event",e);
   //console.log("aaaa",this.rolemanagment.get('Access').value);
   
   
  }
  applyFilter($event){

  } 
  ngOnChanges(changes: any): void {

    
  }
  getdata( row){
    console.log("row",row);
    
  }
  getAllRole(){
    this.roleService.getAllRole().subscribe((res:any)=>{
      
      this.roleArr=res.data
      console.log("res", this.roleArr);
      this.tempArray = new MatTableDataSource<any>(this.roleArr);
      // this.tempArray.paginator = this.paginator;
      this.tempArray.sort = this.sort; 
     
    //   for (let index = 0; index < this.roleArr.length; index++) {
    //     this.rolemanagment.addControl( this.roleArr[index].role ,new FormArray([]))

    //     console.log(this.rolemanagment.value);
    //     // console.log("index",index);
      
    //     this.add2(index).push(this.newAction2()); 
    //     this.formArr=true
    // }

    this.rolemanagment = this.fb.group({
    
      [this.roleArr[0].role+"form"]:[''],
      [this.roleArr[0].role+"view"]:[''],
      [this.roleArr[0].role+"add"]:[''],
      [this.roleArr[0].role+"update"]:[''],
      [this.roleArr[0].role+"delete"]:[''],
         
      });

    })
  }
  add2(index): FormArray {
    return this.rolemanagment.get( this.roleArr[index].role) as FormArray;
  }
  newAction2(): FormGroup {
    return this.fb.group({
      dashboardAccess: ['', Validators.required],
    });
  }
  onSubmit(){
    console.log("submit",this.rolemanagment.value);
    
  }
}
