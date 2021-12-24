import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddSiteComponent } from './add-site/add-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
  selector: 'app-add-site-info',
  templateUrl: './add-site-info.component.html',
  styleUrls: ['./add-site-info.component.scss']
})
export class AddSiteInfoComponent implements OnInit {
  mode: any;
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'siteName',/* 'siteForemen', */'streetNo','streetAddress','Suburb','State', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  allSites: any[]=[];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor( 
    private dialog: MatDialog, 
    private setTitle: SetTitleService,
    private logicalFormInfoService: LogicalFormInfoService,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.setTitle.setTitle('WHS-Add Site Info');
    this.getAllSites()
  }
  getAllSites(field="",value=""){
    this.logicalFormInfoService.getAllSite(field,value).subscribe((res:any)=> {
      console.log(res)
   this.dataSource.data = res.data
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;
   })
  }

  getAllJobTask() {
    // this.logicalFormInfo.getAllJobtask().subscribe((res: any) => {
    //   console.log('jobTaskDetails=>', res);
    //   // this.jobTaskData = res.data[0].subComponents;
    //   let data = res.data
    //   data.forEach((element, index) => {
    //     element.index = index + 1; //adding index
    //   });

    //   this.ELEMENT_DATA = data;
    //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    //   this.dataSource.paginator = this.paginator;

    //   //  this.task = res.data.subComponents;
    // });

  }

  openDialog(id) {
		let dialogRef = this.dialog.open(AddSiteComponent, {
      // width: "550px",
      height:'500px',
			data: {
				action: "new",
				userId: id,
			},
      width: "630px",
		});
		dialogRef.afterClosed().subscribe((result) => {
      if(result == 'true'){
        this.getAllSites()
      }
			console.log("CustomerInfoComponent -> openDialog -> result", result);
			
			console.log("The dialog was closed");
		});
	}
  edit(element) {
    const dialogRef = this.dialog.open(EditSiteComponent, {
      width: "600px",
      // width: "550px",
      height:'500px',
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllSites()
      }
      console.log("The dialog was closed");
    });
  }
  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.siteName}"?`,
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
        this.logicalFormInfoService.deleteSite(item._id).subscribe((res => {
        this.getAllSites()
        this.spinner.hide()
        }))
      }
    });
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sort:Sort) {
    this.getAllSites(sort.active,sort.direction)
     }
 }
