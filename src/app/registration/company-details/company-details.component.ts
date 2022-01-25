import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import Swal from 'sweetalert2';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['index', 'companyName', 'phone', 'email', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private subscript: SubscriptionService,
    private fb: FormBuilder,
    private setTitle: SetTitleService,
    private dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getAllSubscription();
    this.setTitle.setTitle('WHS-Company Details');

  }
  getAllSubscription() {
    this.subscript.getAllsubscription().subscribe((res) => {
      console.log("getAll",res)
      let companyData = res.data;
      companyData.forEach((element, index) => {
        element.index = index + 1; //adding index
      });
      this.ELEMENT_DATA = companyData;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });
  }

  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.companyName}"?`,
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
        this.subscript.deletesubscription(item._id).subscribe((res => {
          this.getAllSubscription()
          this.spinner.hide()
        }))
      }
    });
  }

  edit(id) {
    this.router.navigate(["/admin/registration/addCompanyInfo/" + id]);
  }
  // returnById(id) {
  //   this.router.navigate(["/admin/registration/plantRegistration"]);
  // }
}
