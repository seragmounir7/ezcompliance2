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
  constructor(
    private subscript: SubscriptionService,
    private fb: FormBuilder,
  ) { 
    this.rateAndCoupon = this.fb.group({
      Monthly: ['', Validators.required],
      Yearly: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
  }

  getContact() {
    // this.myId= '61743207ad581a5f5d60d90a';
    this.subscript.getPlan().subscribe((data) => {
      console.log('mode=>', data);
      this.dataPlan = data.data;
      
    });
  }
}
