import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddSiteComponent } from './add-site/add-site.component';
import { EditSiteComponent } from './edit-site/edit-site.component';

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
  displayedColumns: string[] = ['index', 'siteName','siteForemen','streetAddress','Suburb','State', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /////////////mat table end////////////////

  constructor( private dialog: MatDialog, private setTitle: SetTitleService) { }

  ngOnInit(): void {
    this.setTitle.setTitle('WHS-Add Site Info');
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
			data: {
				action: "new",
				userId: id,
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
			console.log("CustomerInfoComponent -> openDialog -> result", result);
			
			console.log("The dialog was closed");
		});
	}
  edit(element) {
    const dialogRef = this.dialog.open(EditSiteComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllJobTask();
      }
      console.log("The dialog was closed");
    });
  }
  delete(item) {
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: `Do you want to delete "${item.title}"?`,
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#00B96F',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Yes, Delete!',
    // }).then((result) => {
    //   if (result.value) {
    //     this.logicalFormInfo
    //       .deleteJobTask(item._id)
    //       .subscribe((res) => {
    //         Swal.fire({
    //           title: 'Parameter Deleted successfully',
    //           showConfirmButton: false,
    //           timer: 1200,
    //         }); console.log('deleted res', res);
    //         this.getAllJobTask();

    //       });
    //   }
    // });
  }

}
