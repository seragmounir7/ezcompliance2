import { element } from 'protractor';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import { AddInstructionsComponent } from './add-instructions/add-instructions.component'


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  url: any;
  addBtn = false
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor(

    private logicalFormInfo: LogicalFormInfoService,
    private dialog: MatDialog,
    private setTitle: SetTitleService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    // this.setTitle.setTitle('WHS-Nature Of Incident');
    this.url = this.activatedRoute.snapshot.url[1].path;
    console.log("this.id", this.url);
    if (this.url === "accident") {
      this.getInstructions();
    } else if (this.url === "riskAssess") {
      this.getRiskInstructions()
    }

  }

  getInstructions() {
    this.logicalFormInfo.getInstruction().subscribe((res: any) => {
      console.log('NatOfIncAll=>', res);
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });
      if (data.length > 0) {
        this.addBtn = false
      } else {
        this.addBtn = true
      }

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      // this.dataSource.sort = this.sort;
      console.log('this.ELEMENT_DATA', this.ELEMENT_DATA);

      //  this.task = res.data.subComponents;
    }, err => this.addBtn = false);
  }

  getRiskInstructions() {
    this.logicalFormInfo.getRiskInstruction().subscribe((res: any) => {
      console.log('NatOfIncAll=>', res);
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });
      if (data.length > 0) {
        this.addBtn = false
      } else {
        this.addBtn = true
      }

      this.ELEMENT_DATA = data;

      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      // this.dataSource.sort = this.sort;
      console.log('this.ELEMENT_DATA', this.ELEMENT_DATA);

      //  this.task = res.data.subComponents;
    }, err => this.addBtn = false);
  }

  edit(element) {
    this.addBtn = false
    const dialogRef = this.dialog.open(AddInstructionsComponent, {
      width: "950px",
      height: "500px",
      data: {
        element: element,
        url: this.url
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        if (this.url === "accident") {
          this.getInstructions();
        } else if (this.url === "riskAssess") {
          this.getRiskInstructions()
        }
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
          .deleteNatOfInc(item._id)
          .subscribe((res) => {
            Swal.fire({
              title: 'Parameter Deleted successfully',
              showConfirmButton: false,
              timer: 1200,
            });
            console.log('deleted res', res);
            this.getInstructions();

          });

      }
    });
  }




}
