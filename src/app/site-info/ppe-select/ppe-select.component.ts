import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-ppe-select',
  templateUrl: './ppe-select.component.html',
  styleUrls: ['./ppe-select.component.scss'],
})
export class PpeSelectComponent implements AfterViewInit,OnInit {
  mode: any;
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor(

    private logicalFormInfo: LogicalFormInfoService
  ) {}

  ngOnInit(): void {
    this.getPPEById();
  }

  getPPEById() {
    this.mode = 'PPE';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((res) => {
      console.log('getPPEById=>', res);
      // this.jobTaskData = res.data[0].subComponents;
      let data = res.data[0].subComponents;
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
}
