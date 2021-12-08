import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-site-inspection-table',
  templateUrl: './site-inspection-table.component.html',
  styleUrls: ['./site-inspection-table.component.scss']
})
export class SiteInspectionTableComponent implements OnInit {
  displayedColumns: string[] = ['position','Name',"Phone","Email","Site",'Action'];
  showDatas: any;
  tempArray: MatTableDataSource <any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private logicalFormInfo: LogicalFormInfoService,public router: Router) { }

  ngOnInit(): void {
    this.getsiteInspection();
  }
  ngAfterViewInit() {
   
  }
  delete(id)
  {
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
        this.logicalFormInfo.deleteSiteInspection(id).subscribe((res) => {
            Swal.fire({
              title: 'Deleted successfully',
              showConfirmButton: false,
              timer: 1200,
            });
            console.log('deleted res', res);
            this.getsiteInspection();
          });
      }
    });
   
  }
  getsiteInspection()
  {
    this.logicalFormInfo.getAllSiteInspection().subscribe((res:any)=>
    {
      console.log("res",res.data);
      
      this.showDatas= res.data.map(x => {
        console.log(x.sitePreview)
    return {
      ...x.sitePreview[0],
      _id:x._id,
    
    }
    })
      this.tempArray = new MatTableDataSource<any>(this.showDatas);
      this.tempArray.paginator = this.paginator;
      this.tempArray.sort = this.sort; 
      console.log("get res",this.showDatas);
    })
  }
  edit(id)
  {
    this.router.navigate(["/admin/forms/siteInspect/"+id]);
  }
}

