import { environment } from './../../../../environments/environment';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-risk-assesment-table',
  templateUrl: './risk-assesment-table.component.html',
  styleUrls: ['./risk-assesment-table.component.scss']
})
export class RiskAssesmentTableComponent implements OnInit {
  displayedColumns: string[] = ['position','customerName',"phone","email","site",'action'];
  showDatas: any;
  tempArray: MatTableDataSource <any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private logicalFormInfo: LogicalFormInfoService,
    public router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getToolBox();
  }
  ngAfterViewInit() {
    // this.tempArray.paginator = this.paginator;
    // this.tempArray.sort = this.sort; 
  }
  delete(item)
  {
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
        this.spinner.show()
        this.logicalFormInfo
        .deleteAssessment(item._id)
        .subscribe((res => {
          Swal.fire({
            title: `"${item.customerName}"? Deleted successfully`,
            showConfirmButton: false,
            timer: 1200,
          });
        this.getToolBox()
        this.spinner.hide()
        }))
      }
    });
    
   
  }
  printPage(id)
  {
    console.log("check");
    // this.logicalFormInfo.printing.next('print');
    localStorage.setItem("key","print");
    // $("<iframe>")                             // create a new iframe element
    //     .hide()                               // make it invisible
    //     .attr("src", environment.stagingUrl+"#/admin/forms/riskAssessSWMS/"+id) // point the iframe to the page you want to print
    //     .appendTo("body");                    // add iframe to the DOM to cause it to load the page

    
    let iframe=document.createElement("iframe")
          iframe.src= environment.stagingUrl+"#/admin/forms/riskAssessSWMS/"+id
          let body = document.getElementsByTagName("body")
          body[0].appendChild(iframe)
    // this.router.navigate(['/',{ outlets: {'print': ['print','riskAssessSWMS', id]}}])
  }
  getToolBox(field="",value="")
  {
    this.logicalFormInfo.getAllassessmet(field,value).subscribe((res:any)=>
    {
      this.showDatas= res.data;
      this.showDatas.forEach((element,i) => {
        return this.showDatas[i].index= i
      });
  
      this.tempArray = new MatTableDataSource<any>(this.showDatas);
      this.tempArray.paginator = this.paginator;
      this.tempArray.sort = this.sort; 
      console.log("get res",this.showDatas);
    })
  }
  edit(id)
  {
    localStorage.setItem('key',' ');
    this.router.navigate(["/admin/forms/riskAssessSWMS/"+id]);
  }

  sortData(sort:Sort){
    this.getToolBox(sort.active,sort.direction)
  }
}
