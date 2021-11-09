import { EditCOPComponent } from './edit-cop/edit-cop.component';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
@Component({
  selector: 'app-code-of-pract',
  templateUrl: './code-of-pract.component.html',
  styleUrls: ['./code-of-pract.component.scss']
})
export class CodeOfPractComponent implements OnInit {

  mode: any;
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title' ,'edit','delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor(private logicalFormInfo: LogicalFormInfoService,private dialog:MatDialog, private setTitle: SetTitleService) {}

  ngOnInit(): void {
    this.getAllCodeOfPractice();
    this.setTitle.setTitle('WHS-Code of Practice');
  }

  getAllCodeOfPractice() {
   
    this.logicalFormInfo.getAllCOP().subscribe((res:any) => {
      console.log('codeOfPractice=>', res);
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
    const dialogRef = this.dialog.open(EditCOPComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllCodeOfPractice();
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
        .deleteCOP(item._id)
        .subscribe((res) => {
          Swal.fire({
            title: 'Parameter Deleted successfully',
            showConfirmButton: false,
            timer: 1200,
          });          
          this.getAllCodeOfPractice();
            
        });
      }
    });
  }
}