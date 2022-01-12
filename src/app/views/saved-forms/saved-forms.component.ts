import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { RoleManagementSharedServiceService } from 'src/app/utils/services/role-management-shared-service.service';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';

@Component({
  selector: 'app-saved-forms',
  templateUrl: './saved-forms.component.html',
  styleUrls: ['./saved-forms.component.scss']
})
export class SavedFormsComponent implements OnInit {
  displayedColumns: string[] = ['formId', "Phone", "Email", "Site", 'Action'];
  showDatas: any;
  tempArray: MatTableDataSource<any>;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  totalCount: number
  constructor(public forms: SavedformsService,
    private spinner: NgxSpinnerService,
    private shared: RoleManagementSharedServiceService,
     public router: Router) { }

  ngOnInit(): void {
    this.getSavedforms();
  }

  getSavedforms(page = 1, limit = 5) {
    this.forms.getAllSavedForms(page, limit).subscribe((res: any) => {
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
    this.getSavedforms(event.pageIndex + 1, event.pageSize)
  }
}
