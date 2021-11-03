import { FormGroup, FormBuilder } from '@angular/forms';
import {  Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { Router} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  closeResult: string;
  page = 1;
  pageSize = 10;
  collectionSize = 10;
  allForms = [
    {title:'Hazards Reported',link:['/admin/forms/hazardRep']},
    {title:'Notifiable Incidents',link:['/admin/forms/incidentRep']},
    {title:'Toolbox Talk',link:['/admin/forms/toolboxTalk']},
    {title:'Site Inspection',link:['/admin/forms/siteInspect']},
    {title:'Risk Assessment',link:['/admin/forms/riskAssessSWMS']}
    ];
  formName = '';
  addForm: FormGroup;
  // formName =[] ;

  
  ngAfterViewInit() {
  }

  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
 
  ) {}

 
  ngOnInit(): void {
  

   
  }

 
  refreshList(): void {
    this.retrieveTutorials({ page: this.page, pageSize: this.pageSize });
  }
  retrieveTutorials(params: any): void {
    // this.tutorialService.getAll(params).subscribe(
    //   (data) => {
    //     this.tutorials = data;
    //     console.log(data);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  }




 
  

}
