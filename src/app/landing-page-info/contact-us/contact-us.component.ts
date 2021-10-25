import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { UploadFileServiceService } from 'src/app/utils/services/upload-file-service.service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  ContactUsDetail!:FormGroup;
  
  serviceDetail: any;
  flexibleData: any;
  selectedImage: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // infoData: any;
  // infoData2: any;
  mode: any;
  myId: string;
  dataContact: any=[];
  Is_id: any;
  closeResult: string;

  constructor(
    private fb: FormBuilder,
    private url: LandingPageInfoServiceService,
    public upload: UploadFileServiceService,
    private modalService: NgbModal,
    public dialog: MatDialog,
    
  ) {
    
    this.ContactUsDetail = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      query: ['', Validators.required],
      
    });
    // this.flexibleInfo = this.fb.group({
    //   moduleId: '',
    //   title: ['', Validators.required],
    //   description: ['', Validators.required],
    //   fileUrl: ['', Validators.required],
    // });
  }

  ngOnInit(): void {
   this.getContact();
    // for (let i = 0; i < 6; i++) {
    //   this.addAction()
    // }
    // this.addAction();
    
    
  }

  // addAction() {
  //   {
  //     this.add().push(this.newAction());
  //   }
  // }
  // add(): FormArray {
  //   return this.flexibleDetail.get('arrObj') as FormArray;
  // }
  // newAction(): FormGroup {
  //   return this.fb.group({
  //     fileUrl: ['', Validators.required],
  //     subTitle: ['', Validators.required],
  //     title: ['', Validators.required],
  //     description: ['', Validators.required],
  //   });
  // }
 

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

  openView(id) {
    console.log("dataView",this.dataContact)
		let dialogRef = this.dialog.open(ViewContactComponent, {
		  data: {
			action:"view",
      headerData:  this.dataContact,
		  headerId: id
		  },
		});
		// this.expensesId = expenses.Action;
		dialogRef.afterClosed().subscribe((result) => {
		  console.log("ExpensesInfoComponent -> openDialog -> result", result);
		//   if ((result == "true")) {
		// 	this.getAllExpenses();
		//   }
		  console.log("The dialog was closed");
		});
	}

  // openDialogEdit(id) {
  //   console.log("dataedit",this.dataContact)
	// 	let dialogRef = this.dialog.open(AddContactComponent, {
	// 	  data: {
	// 		action:"edit",
  //     headerData:  this.dataContact,
	// 	  headerId: id
	// 	  },
	// 	});
	// 	// this.expensesId = expenses.Action;
	// 	dialogRef.afterClosed().subscribe((result) => {
	// 	  console.log("ExpensesInfoComponent -> openDialog -> result", result);
	// 	//   if ((result == "true")) {
	// 	// 	this.getAllExpenses();
	// 	//   }
	// 	  console.log("The dialog was closed");
	// 	});
	// }

 
  getContact() {
    // this.myId= '61743207ad581a5f5d60d90a';
    this.url.getContact().subscribe((data) => {
      console.log('mode=>', data);
      this.dataContact = data.data;
      
    });
  }

  deleteopen(content, id) {
    console.log(id);
    this.Is_id = id;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;

          this.url.deleteContactUs(this.Is_id).subscribe((res) => {
            console.log('deleted res', res);
            this.ngOnInit();
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
