import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddFormComponent } from './add-form/add-form.component';
import Swal from 'sweetalert2'

export interface PeriodicElement {
  categories: string;
  position: number;
  symbol: string;
  formName: string;

}


const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,formName:'Form1' ,categories: 'Category1',  symbol: ''},
  {position: 1,formName:'Form2' ,categories: 'Category1',  symbol: ''},
  {position: 1,formName:'Form3' ,categories: 'Category1',  symbol: ''},
  {position: 1,formName:'FormA' ,categories: 'Category2',  symbol: ''},
  {position: 1,formName:'FormB' ,categories: 'Category2',  symbol: ''},
  {position: 1,formName:'FormC' ,categories: 'Category2',  symbol: ''},
  {position: 1,formName:'FormA1' ,categories: 'Category3',  symbol: ''},
  {position: 1,formName:'FormA2' ,categories: 'Category3',  symbol: ''},
  {position: 1,formName:'FormA3' ,categories: 'Category3',  symbol: ''},
  {position: 1,formName:'FormB1' ,categories: 'Category4',  symbol: ''},
  {position: 1,formName:'FormB2' ,categories: 'Category4',  symbol: ''},
  {position: 1,formName:'FormB3' ,categories: 'Category4',  symbol: ''},

];
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  displayedColumns: string[] = ['position','formName', 'categories', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
 
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  constructor(public dialog: MatDialog) {}

  openDialog(action): void {
    const dialogRef = this.dialog.open(AddFormComponent, {
      width: '600px',
      data: action,
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
