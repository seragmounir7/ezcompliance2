import  Swal  from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
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
  displayedColumns: string[] = ['index', 'customerName','customerContact','customerContactPhone','customerEmail', 'Action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor( 
    private setTitle: SetTitleService, 
    private dialog: MatDialog,
    private logicalFormInfoService: LogicalFormInfoService
    ) { }

  ngOnInit(): void {
    this.getAllCustomers()
    this.setTitle.setTitle('WHS-Add Customer');
    
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAllCustomers(){
    this.logicalFormInfoService.getAllCustomer().subscribe((res:any) => {
      console.log(res)
      this.dataSource.data = res.data
      this.dataSource.paginator = this.paginator
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
		let dialogRef = this.dialog.open(AddingCustComponent, {
      height:'80%',
			data: {
				action: "new",
				userId: id,
			},
		});
		dialogRef.afterClosed().subscribe((result) => {
      if(result === 'ok' ){
        this.getAllCustomers()
      }
			console.log("CustomerInfoComponent -> openDialog -> result", result);
			
			console.log("The dialog was closed");
		});
	}
  edit(element) {
    console.log(element)
    const dialogRef = this.dialog.open(EditCustComponent, {
      width: "550px",
      height:"80%",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "ok")) {
        this.getAllCustomers();
      }
      console.log("The dialog was closed");
    });
  }
  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.customerName}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        this.logicalFormInfoService
          .deleteCustomer(item._id)
          .subscribe((res) => {
            Swal.fire({
              title: 'Deleted successfully',
              showConfirmButton: false,
              timer: 1200,
            }); console.log('deleted res', res);
            this.getAllCustomers();

          });
      }
    });
  }
}
