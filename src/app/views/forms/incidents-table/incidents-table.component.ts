import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-incidents-table',
  templateUrl: './incidents-table.component.html',
  styleUrls: ['./incidents-table.component.scss']
})
export class IncidentsTableComponent implements OnInit {
  displayedColumns: string[] = ['formId', 'projectName', "customerName", "Email", "Site", 'Action'];
  showDatas: any;
  tempArray: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private logicalFormInfo: LogicalFormInfoService,
    public router: Router,
    private shared: RoleManagementSharedServiceService,
    private spinner: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.getIncidentReport();
  }
  ngAfterViewInit() {
    //   this.tempArray.paginator = this.paginator;
    //   this.tempArray.sort = this.sort; 
  }
  delete(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete `,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        this.logicalFormInfo.deleteIncidentReport(id).subscribe((res) => {
          console.log("deleted", res);

          Swal.fire({
            title: 'Deleted successfully',
            showConfirmButton: false,
            timer: 1200,
          });
          console.log('deleted res', res);
          this.getIncidentReport();
        });
      }
    });


  }
  getIncidentReport(field = "", value = "") {
    this.logicalFormInfo.getAllIncidentReport(field, value).subscribe((res: any) => {
      this.showDatas = res.data;
      this.showDatas.forEach((element, i) => {
        return this.showDatas[i].index = i
      });
      this.tempArray = new MatTableDataSource<any>(this.showDatas);
      this.tempArray.paginator = this.paginator;
      this.tempArray.sort = this.sort;
      console.log("get res", this.showDatas);
    })
  }
  edit(id) {
    this.router.navigate(["/admin/forms/incidentRep/" + id]);
  }

  sortData(sort: Sort) {
    this.getIncidentReport(sort.active, sort.direction)
  }

  printPage(id) {
    this.shared.printNext(true)
    console.log("check");
    // this.logicalFormInfo.printing.next('print');
    localStorage.setItem("key", "print");
    // $("<iframe>")                             // create a new iframe element
    //     .hide()                               // make it invisible
    //     .attr("src", "http://localhost:4200/#/admin/forms/hazardRep/"+id) // point the iframe to the page you want to print
    //     .appendTo("body");                    // add iframe to the DOM to cause it to load the page

    //  let iframe=document.createElement("iframe")
    //  iframe.id = "printIframe"
    //        iframe.src= environment.stagingUrl+"#/admin/forms/incidentRep/"+id
    //        iframe.style.display="none";
    //        let body = document.getElementsByTagName("body")
    //        body[0].appendChild(iframe)
    this.spinner.show()
    this.router.navigate(['/', { outlets: { 'print': ['print', 'incidentRep', id] } }])
  }
}
