import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddSiteInspectionCategoryComponent } from './add-site-inspection-category/add-site-inspection-category.component';
import { EditSiteInspectionCategoryComponent } from './edit-site-inspection-category/edit-site-inspection-category.component';
import { MatSort, Sort } from '@angular/material/sort';
import { SiteInspectionTopicComponent } from './site-inspection-topic/site-inspection-topic.component';

@Component({
  selector: 'app-site-inspection-category',
  templateUrl: './site-inspection-category.component.html',
  styleUrls: ['./site-inspection-category.component.scss'],
})
export class SiteInspectionCategoryComponent implements OnInit {
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['index', 'Category', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private setTitle: SetTitleService,
    private dialog: MatDialog,
    private logicalFormInfoService: LogicalFormInfoService
  ) {}

  ngOnInit(): void {
    this.getAllCategory();
    this.setTitle.setTitle('Add Site Inspection Category');
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllCategory(field="",value="") {
    this.logicalFormInfoService
      .getAllSiteInspectionCategory(field,value)
      .subscribe((res: any) => {
        console.log(res);
        this.dataSource.data = res.data;
        this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
  }

  openDialog(id) {
    let dialogRef = this.dialog.open(AddSiteInspectionCategoryComponent, {
      height: '600px',
      width: '700px',

      data: {
        action: 'new',
        userId: id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'ok') {
        this.getAllCategory();
      }
      console.log('CustomerInfoComponent -> openDialog -> result', result);

      console.log('The dialog was closed');
    });
  }
  edit(element) {
    console.log(element);
    const dialogRef = this.dialog.open(EditSiteInspectionCategoryComponent, {
      height: '700px',
      width: '750px',

      // height:'400px',
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'true') {
        this.getAllCategory();
      }
      console.log('The dialog was closed');
    });
  }
  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.category}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        this.logicalFormInfoService
          .deleteSiteInspectionCategory(item._id)
          .subscribe((res) => {
            Swal.fire({
              title: 'Deleted successfully',
              showConfirmButton: false,
              timer: 1200,
            });
            console.log('deleted res', res);
            this.getAllCategory();
          });
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  sortData(sort: Sort) {
 
    this.getAllCategory(sort.active,sort.direction)
     }
}
