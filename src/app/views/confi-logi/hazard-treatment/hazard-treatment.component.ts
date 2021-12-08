import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatSort, Sort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hazard-treatment',
  templateUrl: './hazard-treatment.component.html',
  styleUrls: ['./hazard-treatment.component.scss']
})
export class HazardTreatmentComponent implements OnInit {
  setStatesDetail!: FormGroup;
  
  StatesData: any = [];
  Jurisdiction: any = [];
  COP: any = [];
  SafetyData: any = [];
  regulator=[];
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['index', 'value', 'edit'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
 // @ViewChildren('risk') Risk: QueryList<any>;

  constructor(
    private fb: FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    private setTitle: SetTitleService,
    public router: Router,
  ) {}


  ngOnInit(): void {
  }

}
