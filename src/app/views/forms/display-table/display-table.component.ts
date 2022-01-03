import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.scss']
})
export class DisplayTableComponent implements OnInit {
  displayedColumns: string[] = ['position','customerName',"phone","email","site",'action'];
  showDatas: any;
  tempArray: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private logicalFormInfo: LogicalFormInfoService,public router: Router) { }

  ngOnInit(): void {
    this.getToolBox();
  }
  ngAfterViewInit() {
    // this.tempArray.paginator = this.paginator;
    // this.tempArray.sort = this.sort; 
  }
  delete(id)
  {
    this.logicalFormInfo.deleteToolBox(id).subscribe((res)=>{
      console.log("deleted",res);
      this.getToolBox();
    })
  }
  getToolBox(field="",value="")
  {
    this.logicalFormInfo.gettoolBox(field,value).subscribe((res:any)=>
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
    this.router.navigate(["/admin/forms/toolboxTalk/"+id]);
  }

  sortData(sort:Sort) {
    this.getToolBox(sort.active,sort.direction)
     }

     printPage(id)
     {
       console.log("check");
       // this.logicalFormInfo.printing.next('print');
       localStorage.setItem("key","print");
       // $("<iframe>")                             // create a new iframe element
       //     .hide()                               // make it invisible
       //     .attr("src", "http://localhost:4200/#/admin/forms/hazardRep/"+id) // point the iframe to the page you want to print
       //     .appendTo("body");                    // add iframe to the DOM to cause it to load the page
       
       let iframe=document.createElement("iframe")
       iframe.id = "printIframe"
             iframe.src= "http://localhost:4200/#/admin/forms/toolboxTalk/"+id
             iframe.style.display="none";
             let body = document.getElementsByTagName("body")
             body[0].appendChild(iframe)
     }
}
