import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';
import Swal from 'sweetalert2';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  ContactUsDetail!: FormGroup;

  serviceDetail: any;
  flexibleData: any;
  selectedImage: any = [];
  ELEMENT_DATA = [];
  /////////////mat table////////////////
  displayedColumns: string[] = ['index', 'fullName', 'phoneNumber', 'Email', 'query', 'view', 'delete'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
//
  mode: any;
  myId: string;
  dataContact: any = [];
  Is_id: any;
  closeResult: string;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    private fb: FormBuilder,
    private url: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    private setTitle: SetTitleService
  ) {

    this.ContactUsDetail = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      query: ['', Validators.required],

    });

  }

  ngOnInit(): void {
    this.getContact();
    this.setTitle.setTitle('WHS-Contact Us');
 }



  removeSafetyModule(i) {
    const item = <FormArray>this.ContactUsDetail.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
      this.selectedImage.splice(i, 1);
    }
  }

  openDialog(id): void {
    const dialogRef = this.dialog.open(AddContactComponent, {
      // width: '800px',
      data: {
        action: "new",
        userId: id
      },
    });
  }

  view(id) {
    console.log("dataView", this.dataContact)
    let dialogRef = this.dialog.open(ViewContactComponent, {
      width: '800px',
      data: {
        action: "view",
        headerData: this.dataContact,
        headerId: id
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("ExpensesInfoComponent -> openDialog -> result", result);

      console.log("The dialog was closed");
    });
  }




  getContact() {

    this.url.getContact().subscribe((res) => {
      console.log('mode=>', res);

      let dataContact = res.data;
      dataContact.forEach((element, index) => {
        element.index = index + 1; //adding index
      });

      this.ELEMENT_DATA = dataContact;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;


    });
  }

  delete(id) {
    console.log(id);
    this.Is_id = id;
    this.url.deleteContactUs(this.Is_id).subscribe((res) => {
      Swal.fire('Deleted Successfully')
      console.log('deleted res', res);
      this.ngOnInit();
    });
  }


}
