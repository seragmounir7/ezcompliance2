import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { EditRiskLevelComponent } from './edit-risk-level/edit-risk-level.component';


@Component({
  selector: 'app-risk-level',
  templateUrl: './risk-level.component.html',
  styleUrls: ['./risk-level.component.scss']
})
export class RiskLevelComponent implements OnInit {

  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  allRiskLevel: any[]=[];

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
    this.setTitle.setTitle('WHS-RiskLevel Info');
    this.getAllRiskLevel()
  }
  getAllRiskLevel(){
    this.logicalFormInfoService.getAllRiskLevel().subscribe((res:any)=> {
      console.log(res)
      let data = res.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      console.log('this.ELEMENT_DATA', this.ELEMENT_DATA);
   })
  }
 
  edit(element) {
    const dialogRef = this.dialog.open(EditRiskLevelComponent, {
      width: "550px",
     // height:'50%',
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllRiskLevel()
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
        this.logicalFormInfoService.deleteRiskLevel(item._id).subscribe((res => {
        this.getAllRiskLevel()
        this.spinner.hide()
        }))
      }
    });
  }

}
