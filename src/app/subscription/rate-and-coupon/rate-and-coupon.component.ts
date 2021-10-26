import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from 'src/app/utils/services/subscription.service';

@Component({
  selector: 'app-rate-and-coupon',
  templateUrl: './rate-and-coupon.component.html',
  styleUrls: ['./rate-and-coupon.component.scss']
})
export class RateAndCouponComponent implements OnInit {
  rateAndCoupon!:FormGroup;
  dataPlan: any;
  myId: string;
  data: any;
  isValid:boolean = false;
  constructor(
    private subscript: SubscriptionService,
    private fb: FormBuilder,
  ) { 
    this.rateAndCoupon = this.fb.group({
      monthly: ['', Validators.required],
      yearly: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
    this.getContact();
    
    
  }
  monthly:number;
  yearly:number;
  getContact() {
    this.myId= '6177e0b96d0cc515a04870a2';
    this.subscript.getPlan(this.myId).subscribe((data) => {
      console.log('mode=>', data);
      this.dataPlan = data.data;
      
    });
  }

  editPlan(){
    this.isValid= true;
  }
  editPlanInfo(id) {
    console.log('id=>', id);

    this.myId = this.dataPlan._id;

    console.log('form', this.rateAndCoupon.value);

    // this.isEdit = true;
    this.subscript
      .editPlan(this.myId, this.rateAndCoupon.value)
      .subscribe((res) => {
        console.log('Data Set response' + res);
        this.data = res.data;
        console.log('new response' + this.data);
        // this.dialogRef.close('true');
      });
  }
}
