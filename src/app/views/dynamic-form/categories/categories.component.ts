import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import Swal from 'sweetalert2'
import { ViewFormsComponent } from './view-forms/view-forms.component';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
export interface PeriodicElement {
  categories: string;
  position: number;
  symbol: string;
  
}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, categories: 'Category1',  symbol: 'H'},
  {position: 1, categories: 'Category2',  symbol: 'H'},
  {position: 1, categories: 'Category3',  symbol: 'H'},
  {position: 1, categories: 'Category4',  symbol: 'H'},
  {position: 1, categories: 'Category5',  symbol: 'H'},
  {position: 1, categories: 'Category6',  symbol: 'H'},
  {position: 1, categories: 'Category7',  symbol: 'H'},
  {position: 1, categories: 'Category8',  symbol: 'H'},
];
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})


export class CategoriesComponent implements AfterViewInit, OnInit {
  displayedColumns: string[] = ['position', 'categories', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  closeResult: string;
  categorie="";
  delCategory="";
  addCategory="";
   page = 1;
  pageSize = 10;
  collectionSize = 20;
  //tutorials?: Tutorial[];
  // categories=[
  //   {position: 1, categories: 'Category1',  symbol: 'H'},
  // {position: 1, categories: 'Category2',  symbol: 'H'},
  // {position: 1, categories: 'Category3',  symbol: 'H'},
  // {position: 1, categories: 'Category4',  symbol: 'H'},
  // {position: 1, categories: 'Category5',  symbol: 'H'},
  // {position: 1, categories: 'Category6',  symbol: 'H'},
  // {position: 1, categories: 'Category7',  symbol: 'H'},
  // {position: 1, categories: 'Category8',  symbol: 'H'},
  // ]
  categories=[];
  title = '';
  constructor(public dialog: MatDialog,
    private tutorialService: TutorialService,
    private modalService: NgbModal,
    private dynamicFormServise:DynamicFormsService) {}

  openDialog(action): void {
    const dialogRef = this.dialog.open(AddEditCategoryComponent, {
      width: '650px',
      data: action,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
  openDialogViewForm(category): void {
    const dialogRef = this.dialog.open(ViewFormsComponent, {
      width: '650px',
       data:category
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

  ngOnInit(): void {
    this.refreshList();
  this.getAllCategories();

  }

  getAllCategories(){
    this.dynamicFormServise.getAllCategory().subscribe((res)=>{
      console.log("all categories=>",res);
      this.categories=res.data;
      let length = res.data.length;
      console.log("this.pageSize",this.pageSize);
      
      if((length%10)!=0){
        this.collectionSize = length + (10-length%10);
      }
       else{
        this.collectionSize = length ;
       }
    })
  }

  delete(item){
    
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!'
    }).then((result) => {
      if (result.value) {
        // this.model.attributes.splice(i,1);
      }
    });
    
  }

  refreshList(): void {
    console.log("refreshed");
    
    this.retrieveTutorials({ page: this.page, pageSize: this.pageSize });
  //  this.getAllCategories();
  }

  retrieveTutorials(params: any): void {
    // this.tutorialService.getAll(params).subscribe(
    //   (data) => {
    //     this.tutorials = data;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }

  deleteAllTutorials(): void {
    this.tutorialService.deleteAll().subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteTutorial(id: string): void {
    this.tutorialService.delete(id).subscribe(
      (response) => {
        console.log(response);
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  searchByTitle(): void {
    // this.tutorialService
    //   .findByTitle({
    //     title: this.title,
    //     page: this.page,
    //     pageSize: this.pageSize,
    //   })
    //   .subscribe(
    //     (data) => {
    //       this.tutorials = data;
    //       console.log(data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  }


  open(content,value,_id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log("new value=>",result,_id);
      if(result){
        let data={
          title:result
        }
  this.dynamicFormServise.editCategory(data,_id).subscribe((res)=>{
  console.log("res",res);  
  this.categorie="";
  this.getAllCategories();
})
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
this.categorie=value
  }

  eidtopen(content,value) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log();
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
this.categorie=value
  }
  

  deleteopen(content,value,id) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("delete",id);
      this.dynamicFormServise.deleteCategory(id).subscribe((res)=>{
        console.log(res);
        this.getAllCategories();        
      })      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log("cancle");

    });
this.categorie=value
  }
  addCategoryopen(content) {
    
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log("this.addCategory,",this.addCategory);
      let data={
        title:this.addCategory
      }
      if(this.addCategory){
        this.dynamicFormServise.addCategory(data).subscribe((res)=>{
          console.log(res);
          this.addCategory="";

          this.getAllCategories();
        })
      }
      
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      console.log("add category closed");
      
    });

  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}

