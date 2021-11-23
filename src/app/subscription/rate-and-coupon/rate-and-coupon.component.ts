import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { SetTitleService } from 'src/app/utils/services/set-title.service';
import { EditRateAndCouponComponent } from './edit-rate-and-coupon/edit-rate-and-coupon.component';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-rate-and-coupon',
  templateUrl: './rate-and-coupon.component.html',
  styleUrls: ['./rate-and-coupon.component.scss']
})
export class RateAndCouponComponent implements OnInit {
  rateAndCoupon!:FormGroup;
  dataPlan: any=[''];
  myId: string;
  data: any;
  isValid:boolean = false;
  ELEMENT_DATA = [];
  displayedColumns: string[] = ['index', 'monthly','defaultMonthly','defaultEmp','yearlyDiscount', 'action'];
  dataSource = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatSort) sort: MatSort;
  addPlan=false;
  constructor(
    private subscript: SubscriptionService,
    private fb: FormBuilder,
    private setTitle: SetTitleService, 
    private dialog: MatDialog, 
  ) { 
    this.rateAndCoupon = this.fb.group({
      monthly: ['', Validators.required],
      yearly: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.getPlan();
    this.setTitle.setTitle('WHS-Subscription Details');
    
  }
  monthly:number;
  yearly:number;
  getPlan() {
    this.myId= '6177e0b96d0cc515a04870a2';
    this.subscript.getAllPlan().subscribe((data) => {
      let  dataPlan = data.data;
       if ( dataPlan.length == 0) {
              this.addPlan=true;
               }
        else{
          this.addPlan=false;
          this.ELEMENT_DATA = dataPlan;
          this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
          this.dataSource.sort = this.sort;
        }
    
     
      // console.log('mode=>', data);
      // this.dataSource.data = data.data;
      console.log("dataPlan=>",  dataPlan)
     // this.dataPlan = data.data;
      
    });
  }
 
  editPlan(){
    this.isValid= true;
  }
  // editPlanInfo(element) {
  //   console.log('id=>', element);

  //   this.myId = element._id;

  //   console.log('form', this.rateAndCoupon.value);

  //   // this.isEdit = true;
  //   this.subscript
  //     .editPlan(this.myId, this.rateAndCoupon.value)
  //     .subscribe((res) => {
  //       console.log('Data Set response' + res);
  //       this.data = res.data;
  //       console.log('new response' + this.data);
  //       // this.dialogRef.close('true');
  //     });
  // }
  edit(element) {
    const dialogRef = this.dialog.open(EditRateAndCouponComponent, {
      width: "550px",
     height:"400px",
      data: element,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if ((result == "true")) {
        this.getPlan()
      }
      console.log("The dialog was closed");
    });
  }

  }

