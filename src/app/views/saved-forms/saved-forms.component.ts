import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { merge } from 'rxjs';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';

@Component({
  selector: 'app-saved-forms',
  templateUrl: './saved-forms.component.html',
  styleUrls: ['./saved-forms.component.scss']
})
export class SavedFormsComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator1: MatPaginator;

  displayedColumns: string[] = ['formId', "Phone", "Email", "Site", 'Action'];
  showDatas: any;
  tempArray: MatTableDataSource<any>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalCount: number
  page: number = 1;
  limit: number = 5;
  searchString: string="";
  constructor(public forms: SavedformsService,
    private spinner: NgxSpinnerService,
    private shared: RoleManagementSharedServiceService,
     public router: Router) { }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => (this.paginator1.pageIndex = 0));
    merge(this.sort.sortChange, this.paginator1.page).subscribe(() => {
      // this.isLoadingResults = true;

      const changeState = {
        sort: this.sort.active || "",
        order: this.sort.direction || "",
        pageNumber: this.paginator1.pageIndex + 1
      }
      console.log(changeState)
    })
  }

  ngOnInit(): void {
    this.getSavedforms();
  }

  getSavedforms(page = this.page, limit = this.limit, searchString = this.searchString) {
    this.forms.getAllSavedForms(page, limit, searchString).subscribe((res: any) => {
      this.showDatas = res.data;
      this.totalCount = res.totalCount
      this.showDatas.forEach((element, i) => {
        return this.showDatas[i].index = i
      });

      this.tempArray = new MatTableDataSource<any>(this.showDatas);
      // this.tempArray.paginator = this.paginator;
      this.tempArray.sort = this.sort;
      console.log("get res", this.showDatas);
    })
  }
  edit(id, type) {

    // this.forms.formType.next(type);
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "formType": type.toString()
      }
    };
    if (type == 'Hazard') {
      this.router.navigate(["/admin/forms/hazardRep/" + id], navigationExtras);
    }
    else if (type == 'Incident') {
      this.router.navigate(["/admin/forms/incidentRep/" + id], navigationExtras);
    }
    else if (type == 'Site Inspection') {
      this.router.navigate(["/admin/forms/siteInspect/" + id], navigationExtras);
    }
    else if (type == 'Tool Box') {
      this.router.navigate(["/admin/forms/toolboxTalk/" + id], navigationExtras);
    }
    else if (type == 'Risk Assessment') {
      this.router.navigate(["/admin/forms/riskAssessSWMS/" + id], navigationExtras);
    }
  }
  printPage(id,type) {
    this.shared.printNext(true)
    console.log("check");
    // this.logicalFormInfo.printing.next('print');
    localStorage.setItem("key", "print");
    // $("<iframe>")                             // create a new iframe element
    //     .hide()                               // make it invisible
    //     .attr("src", environment.stagingUrl+"#/admin/forms/riskAssessSWMS/"+id) // point the iframe to the page you want to print
    //     .appendTo("body");                    // add iframe to the DOM to cause it to load the page


    // let iframe=document.createElement("iframe")
    //       iframe.src= environment.stagingUrl+"#/admin/forms/riskAssessSWMS/"+id
    //       let body = document.getElementsByTagName("body")
    //       body[0].appendChild(iframe)

    this.spinner.show("printLoader")
    // this.router.navigate(['/', { outlets: { 'print': ['print', 'riskAssessSWMS', id] } }])
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "formType": type.toString()
      }
    };
    if (type == 'Hazard') {
      this.router.navigate(['/', { outlets: { 'print': ['print', 'hazardRep', id] } }],navigationExtras)
    }
    else if (type == 'Incident') {
      this.router.navigate(['/', { outlets: { 'print': ['print', 'incidentRep', id] } }],navigationExtras)
    }
    else if (type == 'Site Inspection') {
      this.router.navigate(['/', { outlets: { 'print': ['print', 'siteInspect', id] } }],navigationExtras)
    }
    else if (type == 'Tool Box') {
      this.router.navigate(['/', { outlets: { 'print': ['print', 'toolboxTalk', id] } }],navigationExtras)
    }
    else if (type == 'Risk Assessment') {
      this.router.navigate(['/', { outlets: { 'print': ['print', 'riskAssessSWMS', id] } }],navigationExtras)
    }
  }
  paginator(event: PageEvent) {
    this.page = event.pageIndex
    this.limit = event.pageSize
    this.getSavedforms()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
     this.searchString = filterValue.trim().toLowerCase();
     this.getSavedforms()
  }

}
