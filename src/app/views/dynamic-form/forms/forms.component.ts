import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddFormComponent } from './add-form/add-form.component';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TutorialService } from 'src/app/services/tutorial.service';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AfterViewInit } from '@angular/core';

import Swal from 'sweetalert2';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
export interface PeriodicElement {
  categories: string;
  position: number;
  symbol: string;
  formName: string;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements AfterViewInit, OnInit {
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = [
    'index',
    'formName',
    'formFrequency',
    'Disable/Enable',
    'edit',
  ];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  closeResult: string;
  page = 1;
  pageSize = 10;
  collectionSize = 10;
  allForms = [];
  formName = '';
  addForm: FormGroup;
  form = '';

  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
    private fb: FormBuilder,
    private dynamicFormServise: DynamicFormsService,
  ) {}

  addDyForm(){
    console.log('jjjj');
    
    const dialogRef = this.dialog.open(AddFormComponent, {
      width: "700px",
      data: '',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getAllForms();
      }
      console.log("The dialog was closed");
    });
  }

  ngOnInit(): void {
    sessionStorage.setItem('formId', '');
    sessionStorage.setItem('type', '');
    sessionStorage.setItem('formTitle', '');
    sessionStorage.setItem('frequency', '');
    this.addForm = this.fb.group({
      formName: [null, Validators.required],
      frequency: [null, Validators.required],
    });

    this.getAllForms();
    this.dynamicFormServise.homebarTitle.next('Dynamic Forms List');
  }
  getAllForms() {
    this.spinner.show();
    this.dynamicFormServise.getAllForm().subscribe((resF) => {
      // this.allForms=res.data;
      console.log('allForms', resF);
      // console.log('allForms', resF.data);
      this.allForms = resF.data;
      let data = resF.data;
      data.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort; 

      this.spinner.hide();
    });
  }
  slideChanged(e, form) {
    let data = {
      title: form.title,
      htmlObject: form.htmlObject,
      enable: e.checked,
      frequency: form.frequency,
    };

    this.dynamicFormServise.editForm(data, form._id).subscribe((res) => {
      if (e.checked) {
        Swal.fire({
          title: 'Form Enabled successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      } 
      else {
        Swal.fire({
          title: 'Form Enabled successfully',
          showConfirmButton: false,
          timer: 1200,
        });
      } 
     
    });
  }
  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item.title}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        this.dynamicFormServise.deleteForm(item._id).subscribe((res) => {
          Swal.fire({
            title: 'Form Deleted successfully',
            showConfirmButton: false,
            timer: 1200,
          });        
            this.getAllForms();
        });
      }
    });
  }

  // addFormopen(content) {
  //   this.modalService
  //     .open(content, { ariaLabelledBy: 'modal-basic-title' })
  //     .result.then(
  //       (result) => {
  //         console.log(result);

  //         sessionStorage.setItem('type', 'add');
  //         sessionStorage.setItem(
  //           'formTitle',
  //           this.addForm.get('formName').value
  //         );
  //         sessionStorage.setItem(
  //           'frequency',
  //           this.addForm.get('frequency').value
  //         );
  //         // this.dynamicFormServise.formTitle = this.addForm.get(
  //         //   'formName'
  //         // ).value;
  //         // this.dynamicFormServise.formType = 'add';
  //         this.router.navigate(['/admin/dynamicForm']);

  //         // this.dynamicFormServise.addForm(data).subscribe((res)=>{
  //         //   console.log(res);
  //         //   this.getAllForms();
  //         //   this.addForm.reset();
  //         // })

  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       (reason) => {
  //         this.addForm.reset();
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }

  editForm(form) {
    console.log(form);
    sessionStorage.setItem('formId', form._id);
    sessionStorage.setItem('type', 'edit');
    sessionStorage.setItem('formTitle', form.title);
    sessionStorage.setItem('frequency', form.frequency);

    // this.dynamicFormServise.formIdEdit = form._id;
    // this.dynamicFormServise.formType = 'edit';
    // this.dynamicFormServise.formTitle = form.title;
    this.router.navigate(['/admin/dynamicForm']);
    //   this.router.navigate(['/admin/dynamicForm'],

    //   {queryParams: {  type:'edit',formId:form._id, formName: form.title}});
  }
  viewForm(form) {
    console.log('view', form);
    // let data={
    //   type:'view',formId:form._id, formName: form.title
    // }
    sessionStorage.setItem('formId', form._id);
    sessionStorage.setItem('type', 'view');
    sessionStorage.setItem('formTitle', form.title);
    sessionStorage.setItem('frequency', form.frequency);
    // this.dynamicFormServise.formIdEdit = form._id;
    // this.dynamicFormServise.formType = 'view';
    // this.dynamicFormServise.formTitle = form.title;
    // this.router.navigate(['/admin/dynamicForm'],
    // {queryParams: { type:'view',formId:form._id, formName: form.title}});
    this.router.navigate(['/admin/dynamicForm']);
  }

  frequencyChange(e, form) {
    console.log(e.target.value);
    let data = {
      title: form.title,
      htmlObject: form.htmlObject,
      enable: form.enable,
      frequency: e.target.value,
    };

    this.dynamicFormServise.editForm(data, form._id).subscribe((res) => {
      Swal.fire('Form Frequency Changed successfully');
      this.getAllForms();
    });
  }

}
