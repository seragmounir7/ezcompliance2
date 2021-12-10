import { EditLicenceComponent } from './edit-licence/edit-licence.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit,ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-licence-and-qual',
  templateUrl: './licence-and-qual.component.html',
  styleUrls: ['./licence-and-qual.component.scss']
})
export class LicenceAndQualComponent implements OnInit {
  licenceAndQual: FormGroup;
  formData: any;

  mode: any;
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title','category','action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor(private logicalFormInfo: LogicalFormInfoService,private dialog:MatDialog,
    private setTitle: SetTitleService) {}

  ngOnInit(): void {
    this.getAllLicence();
    this.setTitle.setTitle('WHS-License and Qualification List');
  }

  getAllLicence() {
    this.logicalFormInfo.getAllLicence().subscribe((res) => {
      console.log('getAllLicence=>', res);
      // this.jobTaskData = res.data[0].subComponents;
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      //  this.task = res.data.subComponents;
    });
 
  }
  edit(element){
    const dialogRef = this.dialog.open(EditLicenceComponent, {
      width: "550px",
      data: element,
    });
    console.log(element)
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllLicence();
      }
      console.log("The dialog was closed");
    });
  }
  delete(item) {
    console.log("delete",item);
    
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
        .deleteLicence(item._id)
        .subscribe((res) => {
          Swal.fire({
            title: 'Deleted successfully',
            showConfirmButton: false,
            timer: 1000,
          });          console.log('deleted res', res);
          this.getAllLicence();
            
        });
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
