import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { EditFaqComponent } from './edit-faq/edit-faq.component';


@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {

  FAQData: any = [];
  FaqId: any = [];
  mode: any;
  jobTaskData: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'title', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  data: any = [];
  myId: any;
  Id: any
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(private dialog: MatDialog, private landingPageInfo: LandingPageInfoServiceService,
  ) { }

  ngOnInit(): void {
    this.getAllPortal();

  }
  getAllPortal() {

    this.landingPageInfo.getAllPortal().subscribe((res: any) => {
      console.log('portalDetails=>', res);
      let faqData = res.data;
      faqData.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = faqData;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;

    });

  }

  edit(element) {

    const dialogRef = this.dialog.open(EditFaqComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllPortal();
      }
      console.log("The dialog was closed");
    });
  }
  delete(item) {
    console.log("delete", item);

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
        this.landingPageInfo
          .deletePortal(item._id)
          .subscribe((res) => {
            Swal.fire({
              title: 'Deleted successfully',
              showConfirmButton: false,
              timer: 1000,
            }); console.log('deleted res', res);
            this.getAllPortal();

          });
      }
    });
  }

}

