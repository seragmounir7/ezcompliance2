import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';
import { AddAndEditRegComponent } from './add-and-edit-reg/add-and-edit-reg.component';

@Component({
  selector: 'app-regulator',
  templateUrl: './regulator.component.html',
  styleUrls: ['./regulator.component.scss']
})
export class RegulatorComponent implements OnInit {
  mode: any;
  regData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title' ,'edit','delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor(private logicalFormInfo: LogicalFormInfoService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getAllRegulator()
  }

  getAllRegulator() {
    this.logicalFormInfo.getAllRegulator().subscribe((res) => {
      console.log('getAllRegulator=>', res);
      // this.jobTaskData = res.data[0].subComponents;
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

      //  this.task = res.data.subComponents;
    });
 
  }
  
  edit(element){
    const dialogRef = this.dialog.open(AddAndEditRegComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllRegulator();
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
        .deleteRegulator(item._id)
        .subscribe((res) => {
          Swal.fire({
            title: 'Regulator Deleted successfully',
            showConfirmButton: false,
            timer: 1200,
          });
          console.log('deleted res', res);
          this.getAllRegulator();
            
        });
      }
    });
  }
}
