import Swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';

@Component({
  selector: 'app-hazard-form-table-details',
  templateUrl: './hazard-form-table-details.component.html',
  styleUrls: ['./hazard-form-table-details.component.scss']
})
export class HazardFormTableDetailsComponent implements OnInit {
  displayedColumns: string[] = ['position','name',"phone","email","site",'action'];
  showDatas: any;
  dataSource: MatTableDataSource <any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private logicalFormInfo: LogicalFormInfoService,public router: Router) { }


  ngOnInit(): void {
    this.getAllHazardFormData();
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
        this.logicalFormInfo.deleteHazardFormData(id).subscribe((res) => {
            Swal.fire({
              title: 'Deleted successfully',
              showConfirmButton: false,
              timer: 1200,
            });
            console.log('deleted res', res);
            this.getAllHazardFormData();
          });
      }
    });
   
  }
  getAllHazardFormData(field="",value="")
  {
    this.logicalFormInfo.getAllHazardFormData(field,value).subscribe((res:any)=>
    {
      console.log("res",res.data);
      
      this.showDatas= res.data
      this.showDatas.forEach((element,i) => {
    return this.showDatas[i].index= i
  });
  console.log("this.showDatas",this.showDatas);
  
      this.dataSource = new MatTableDataSource<any>(this.showDatas);
      this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort; 
      console.log("get res",this.showDatas);
    })
  }
  edit(id)
  {
    this.router.navigate(["/admin/forms/hazardRep/"+id]);
  }

  sortData(sort:Sort) {
    this.getAllHazardFormData(sort.active,sort.direction)
     }
}
