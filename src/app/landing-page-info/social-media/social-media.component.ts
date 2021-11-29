import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import Swal from 'sweetalert2';
import { AddAndEditSocialMediaComponent } from './add-and-edit-social-media/add-and-edit-social-media.component';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  ELEMENT_DATA = [];
  socialMediaDetails!:FormGroup;
  displayedColumns: string[] = ['facebook', 'twitter', 'youtube',  'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  hide: boolean;
  constructor(
    private fb: FormBuilder,
    private landingPageInfo: LandingPageInfoServiceService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    public router: Router,
    private setTitle: SetTitleService
    ) { }

  ngOnInit(): void {
    this.getSocialMedia();
    this.setTitle.setTitle('WHS-Social Media');
  }
  getSocialMedia() {;
    this.landingPageInfo.getAllSocialMedia().subscribe((res: any) => {
      console.log('SocialMediaDetails=>', res);
      let SocialMediaData = res.data;
      
      this.ELEMENT_DATA = SocialMediaData;
      this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    });
  }
  editForm(element) {
    const dialogRef = this.dialog.open(AddAndEditSocialMediaComponent, {
      width: "550px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getSocialMedia();
      }
      console.log("The dialog was closed");
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
       this.spinner.show()
        this.landingPageInfo.deleteSocialMedia(item._id).subscribe((res) => {
          Swal.fire('Deleted Successfully')
          this.getSocialMedia();
          this.ngOnInit();
          this.spinner.hide()
        })
      }
    });
  }
  close() {
    this.hide = false;
  }
}
