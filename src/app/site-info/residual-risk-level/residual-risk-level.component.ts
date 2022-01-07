import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { EditResidualRiskLevelComponent } from './edit-residual-risk-level/edit-residual-risk-level.component';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-residual-risk-level',
  templateUrl: './residual-risk-level.component.html',
  styleUrls: ['./residual-risk-level.component.scss']
})
export class ResidualRiskLevelComponent implements OnInit {
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  allResidualRiskLevel: any[] = [];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private dialog: MatDialog,
    private setTitle: SetTitleService,
    private logicalFormInfoService: LogicalFormInfoService,
    private spinner: NgxSpinnerService
  ) { }
  ngOnInit(): void {
    this.setTitle.setTitle('WHS-ResidualRiskLevel Info');
    this.getAllResidualRiskLevel()
  }
  getAllResidualRiskLevel(field = "", value = "") {
    this.logicalFormInfoService.getAllResidual(field, value).subscribe((res: any) => {
      console.log(res)
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      console.log('this.ELEMENT_DATA', this.ELEMENT_DATA);
    })
  }

  edit(element) {
    const dialogRef = this.dialog.open(EditResidualRiskLevelComponent, {
      width: "550px",
      // height:'50%',
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllResidualRiskLevel()
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
        console.log(result)
        // this.model.attributes.splice(i,1);
        this.spinner.show()
        this.logicalFormInfoService.deleteResidual(item._id).subscribe((res => {
          this.getAllResidualRiskLevel()
          this.spinner.hide()
        }))
      }
    });
  }

  sortData(sort: Sort) {

    this.getAllResidualRiskLevel(sort.active, sort.direction)
  }
}
