import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditPPEComponent } from './edit-ppe/edit-ppe.component';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
@Component({
  selector: 'app-ppe-select',
  templateUrl: './ppe-select.component.html',
  styleUrls: ['./ppe-select.component.scss'],
})
export class PpeSelectComponent implements AfterViewInit,OnInit {
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title','edit','delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

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
    this.getAllPPEs();
    this.setTitle.setTitle('WHS-PPE List');

  }

  getAllPPEs() {
    this.logicalFormInfo.getAllPPE().subscribe((res:any) => {
      console.log('PPEAll=>', res);
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      console.log('this.ELEMENT_DATA', this.ELEMENT_DATA);

      //  this.task = res.data.subComponents;
    });
  }
  edit(element){
    const dialogRef = this.dialog.open(EditPPEComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllPPEs();
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
        .deletePPE(item._id)
        .subscribe((res) => {
          Swal.fire({
            title: 'Parameter Deleted successfully',
            showConfirmButton: false,
            timer: 1200,
          });
          console.log('deleted res', res);
          this.getAllPPEs();
            
        });
      }
    });
  }
}
