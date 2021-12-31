import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import { EditChangesMadeComponent } from './edit-changes-made/edit-changes-made.component';

@Component({
  selector: 'app-changes-made',
  templateUrl: './changes-made.component.html',
  styleUrls: ['./changes-made.component.scss']
})
export class ChangesMadeComponent implements OnInit {
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title','action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor(
   
    private logicalFormInfo: LogicalFormInfoService,
    private dialog:MatDialog,
    private setTitle:SetTitleService
  ) {}

  ngOnInit(): void {
    this.getAllChanges();
    this.setTitle.setTitle('WHS-Changes Made');
    
  }

  getAllChanges(field="",value="") {
    this.logicalFormInfo.getAllChangesMade(field,value).subscribe((res:any) => {
      console.log('Changes=>', res);
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
     // this.dataSource.sort = this.sort;
      console.log('this.ELEMENT_DATA', this.ELEMENT_DATA);

      //  this.task = res.data.subComponents;
    });
  }

  edit(element){
    const dialogRef = this.dialog.open(EditChangesMadeComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllChanges();
      }
      console.log("The dialog was closed");
    });
  }
  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        this.logicalFormInfo
        .deleteChangesMade(item._id)
        .subscribe((res) => {
          Swal.fire({
            title: 'Parameter Deleted successfully',
            showConfirmButton: false,
            timer: 1200,
          });
          console.log('deleted res', res);
          this.getAllChanges();
            
        });
      
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sortData(sort: Sort) {
 
    this.getAllChanges(sort.active,sort.direction)
     }
}
