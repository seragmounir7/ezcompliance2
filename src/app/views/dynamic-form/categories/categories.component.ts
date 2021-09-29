import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import Swal from 'sweetalert2'
import { ViewFormsComponent } from './view-forms/view-forms.component';
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
  
  constructor(public dialog: MatDialog) {}

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
}

