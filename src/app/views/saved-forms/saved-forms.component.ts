import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationExtras, Router } from '@angular/router';
import { SavedformsService } from 'src/app/utils/services/savedforms.service';

@Component({
  selector: 'app-saved-forms',
  templateUrl: './saved-forms.component.html',
  styleUrls: ['./saved-forms.component.scss']
})
export class SavedFormsComponent implements OnInit {
  displayedColumns: string[] = ['position','Name',"Phone","Email","Site",'Action'];
  showDatas: any;
  tempArray: MatTableDataSource <any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public forms:SavedformsService,public router: Router) { }

  ngOnInit(): void {
   this.getSavedforms();
  }
  
  getSavedforms()
  {
    this.forms.getAllSavedForms().subscribe((res:any)=>{
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
edit(id,type)
{

// this.forms.formType.next(type);
let navigationExtras: NavigationExtras = {
  queryParams: {
      "formType":type.toString()
  }
};
  if(type=='Hazard')
  {
    this.router.navigate(["/admin/forms/hazardRep/"+id],navigationExtras);
  }
  else if(type=='Incident')
  {
    this.router.navigate(["/admin/forms/incidentRep/"+id],navigationExtras);
  }
  else if(type=='Site Inspection')
  {
    this.router.navigate(["/admin/forms/siteInspect/"+id],navigationExtras);
  }
  else if(type=='Tool Box')
  {
    this.router.navigate(["/admin/forms/toolboxTalk/"+id],navigationExtras);
  }
  else if(type=='Risk Assessment')
  {
    this.router.navigate(["/admin/forms/riskAssessSWMS/"+id],navigationExtras);
  }
}
}
