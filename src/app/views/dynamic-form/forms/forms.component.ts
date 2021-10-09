import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AddFormComponent } from './add-form/add-form.component';
import Swal from 'sweetalert2';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TutorialService } from 'src/app/services/tutorial.service';
import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

export interface PeriodicElement {
  categories: string;
  position: number;
  symbol: string;
  formName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, formName: 'Form1', categories: 'Category1', symbol: '' },
  { position: 1, formName: 'Form2', categories: 'Category1', symbol: '' },
  { position: 1, formName: 'Form3', categories: 'Category1', symbol: '' },
  { position: 1, formName: 'FormA', categories: 'Category2', symbol: '' },
  { position: 1, formName: 'FormB', categories: 'Category2', symbol: '' },
  { position: 1, formName: 'FormC', categories: 'Category2', symbol: '' },
  { position: 1, formName: 'FormA1', categories: 'Category3', symbol: '' },
  { position: 1, formName: 'FormA2', categories: 'Category3', symbol: '' },
  { position: 1, formName: 'FormA3', categories: 'Category3', symbol: '' },
  { position: 1, formName: 'FormB1', categories: 'Category4', symbol: '' },
  { position: 1, formName: 'FormB2', categories: 'Category4', symbol: '' },
  { position: 1, formName: 'FormB3', categories: 'Category4', symbol: '' },
];
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'formName', 'categories', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  closeResult: string;
  page = 1;
  pageSize = 10;
  collectionSize = 10;
  allForms = [];
  formName = '';
  addForm: FormGroup;
  form = '';

  tutorials = [
    { position: 1, formName: 'Form1', categories: 'Category1', symbol: '' },
    { position: 1, formName: 'Form2', categories: 'Category1', symbol: '' },
    { position: 1, formName: 'Form3', categories: 'Category1', symbol: '' },
    { position: 1, formName: 'FormA', categories: 'Category2', symbol: '' },
    { position: 1, formName: 'FormB', categories: 'Category2', symbol: '' },
    { position: 1, formName: 'FormC', categories: 'Category2', symbol: '' },
    { position: 1, formName: 'FormA1', categories: 'Category3', symbol: '' },
    { position: 1, formName: 'FormA2', categories: 'Category3', symbol: '' },
    { position: 1, formName: 'FormA3', categories: 'Category3', symbol: '' },
    { position: 1, formName: 'FormB1', categories: 'Category4', symbol: '' },
    { position: 1, formName: 'FormB2', categories: 'Category4', symbol: '' },
    { position: 1, formName: 'FormB3', categories: 'Category4', symbol: '' },
  ];
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
    private fb: FormBuilder,
    private tutorialService: TutorialService,
    private dynamicFormServise: DynamicFormsService,
    private modalService: NgbModal
  ) {}

  openDialog(action): void {
    const dialogRef = this.dialog.open(AddFormComponent, {
      width: '600px',
      data: action,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  ngOnInit(): void {
    sessionStorage.setItem('formId', '');
    sessionStorage.setItem('type', '');
    sessionStorage.setItem('formTitle', '');
    this.addForm = this.fb.group({
      formName: [null, Validators.required],
    });

    this.getAllForms();
    this.refreshList();
    this.dynamicFormServise.homebarTitle.next('Dynamic Forms List');
  }
  getAllForms() {
    this.spinner.show();
    this.dynamicFormServise.getAllForm().subscribe((resF) => {
      // this.allForms=res.data;
      console.log('resF', resF);
      console.log('allForms', resF.data);
      this.allForms = resF.data;
      let length = this.allForms.length;
      if (length) {
        if (length % 10 != 0) {
          this.collectionSize = length + (10 - (length % 10));
        } else {
          this.collectionSize = length;
        }
      }

      this.spinner.hide();
    });
  }

  delete(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${item}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#00B96F',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.value) {
        // this.model.attributes.splice(i,1);
      }
    });
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
  addFormopen(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          console.log(result);

          sessionStorage.setItem('type', 'add');
          sessionStorage.setItem(
            'formTitle',
            this.addForm.get('formName').value
          );
          this.dynamicFormServise.formTitle = this.addForm.get(
            'formName'
          ).value;
          this.dynamicFormServise.formType = 'add';
          this.router.navigate(['/admin/dynamicForm']);

          // this.dynamicFormServise.addForm(data).subscribe((res)=>{
          //   console.log(res);
          //   this.getAllForms();
          //   this.addForm.reset();
          // })

          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.addForm.reset();
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  editForm(form) {
    console.log(form);
    sessionStorage.setItem('formId', form._id);
    sessionStorage.setItem('type', 'edit');
    sessionStorage.setItem('formTitle', form.title);
    // let data={
    //   type:'edit',formId:form._id, formName: form.title
    // }
    this.dynamicFormServise.formIdEdit = form._id;
    this.dynamicFormServise.formType = 'edit';
    this.dynamicFormServise.formTitle = form.title;
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
    this.dynamicFormServise.formIdEdit = form._id;
    this.dynamicFormServise.formType = 'view';
    this.dynamicFormServise.formTitle = form.title;
    // this.router.navigate(['/admin/dynamicForm'],
    // {queryParams: { type:'view',formId:form._id, formName: form.title}});
    this.router.navigate(['/admin/dynamicForm']);
  }
  deleteopen(content, form) {
    this.form = form.title;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          console.log('id', form._id);
          this.dynamicFormServise.deleteForm(form._id).subscribe((res) => {
            console.log('deleted res', res);
            this.getAllForms();
          });
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log('dismissed');
        }
      );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
