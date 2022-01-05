import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  closeResult: string;
  page = 1;
  pageSize = 10;
  collectionSize = 10;
  ELEMENT_DATA = [
    { index: 1, title: 'Hazards Reported', link: ['/admin/forms/hazardRep/'+'form'] },
   
   
    { index: 2, title: 'Notifiable Accident', link: ['/admin/forms/incidentRep/'+'Form'] },
    { index: 3, title: 'Toolbox Talk', link: ['/admin/forms/toolboxTalk/'+'form'] },
    { index: 4, title: 'Site Inspection', link: ['/admin/forms/siteInspect/'+'form'] },
    { index: 5, title: 'Risk Assessment', link: ['/admin/forms/riskAssessSWMS/'+'form'] }
  ];
  formName = '';
  addForm: FormGroup;
  // formName =[] ;
  @Input() displayedColumns: string[] = ['index', 'formName', 'formFrequency', 'Disable/Enable'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  url: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort; 
  }

  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
    private setTitle: SetTitleService,
    private activatedRoute:ActivatedRoute
  ) { }
goTo(title)
{
  console.log("title",title);
  if(title==="Toolbox Talk")
  {
    this.router.navigate(["/admin/forms/tableData"]);
  }
  if(title==="Site Inspection")
  {
    this.router.navigate(["/admin/forms/siteinspectiontable"]);
  }
  if(title==="Hazards Reported")
  {
    this.router.navigate(["/admin/forms/hazardTable"]);
  
}
if(title==="Notifiable Accident")
  {
    this.router.navigate(["/admin/forms/incidentsTable"]);
  }
  if(title==="Risk Assessment")
  {
    this.router.navigate(["/admin/forms/riskAssessTable"]);
  }
}

  ngOnInit(): void {
    this.url=this.activatedRoute.snapshot.url
    this.setTitle.setTitle('WHS-All Form');
  }










}
