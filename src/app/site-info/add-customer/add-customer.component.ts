import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { AddingCustComponent } from './adding-cust/adding-cust.component';
import { EditCustComponent } from './edit-cust/edit-cust.component';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['index', 'siteName','siteForemen','streetAddress','Suburb','State', 'edit', 'delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( private setTitle: SetTitleService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.setTitle.setTitle('WHS-Add Customer');
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
		let dialogRef = this.dialog.open(AddingCustComponent, {
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
    const dialogRef = this.dialog.open(EditCustComponent, {
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
