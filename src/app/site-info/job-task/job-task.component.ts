import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EditTaskComponent } from './edit-task/edit-task.component';

@Component({
  selector: 'app-job-task',
  templateUrl: './job-task.component.html',
  styleUrls: ['./job-task.component.scss'],
})
export class JobTaskComponent implements AfterViewInit, OnInit {
  mode: any;
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title' ,'edit','delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);


relation=[
  {
    jobTitle:'title1',jobId:'', riskArr:[{title:"",id:"",index:""}]
  }
]







  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor(private logicalFormInfo: LogicalFormInfoService,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.getJobTaskById();
  }

  getJobTaskById() {
    this.mode = 'JOBTask';
    this.logicalFormInfo.getFormDataById(this.mode).subscribe((res) => {
      console.log('jobTaskDetails=>', res);
      // this.jobTaskData = res.data[0].subComponents;
      let data = res.data[0].subComponents;
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
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getJobTaskById();
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
        .deleteSubComponent(item._id)
        .subscribe((res) => {
          Swal.fire('Deleted Successfully');
          console.log('deleted res', res);
          this.getJobTaskById();
            
        });
      }
    });
  }
}
