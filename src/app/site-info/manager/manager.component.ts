import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatSort } from '@angular/material/sort';
import { EditManagerComponent } from './edit-manager/edit-manager.component';


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {
  mode: any;
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['index', 'name','email', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private logicalFormInfo: LogicalFormInfoService, private dialog: MatDialog,
    private setTitle: SetTitleService) { }

  ngOnInit(): void {
    this.getAllManager();
      this.setTitle.setTitle('WHS-Manager');
  }
  getAllManager() {
    this.logicalFormInfo.getAllManager().subscribe((res: any) => {
      console.log('getAllManager=>', res);
      // this.jobTaskData = res.data[0].subComponents;
      let data = res.data
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
  edit(element) {
    const dialogRef = this.dialog.open(EditManagerComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllManager();
      }
      console.log("The dialog was closed");
    });
  }
  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.name}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        this.logicalFormInfo
          .deleteManager(item._id)
          .subscribe((res) => {
            Swal.fire({
              title: 'Details Deleted successfully',
              showConfirmButton: false,
              timer: 1200,
            }); console.log('deleted res', res);
            this.getAllManager();

          });
      }
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
