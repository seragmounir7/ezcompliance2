import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-logic',
  templateUrl: './test-logic.component.html',
  styleUrls: ['./test-logic.component.scss']
})
export class TestLogicComponent implements OnInit {

  count:number=0

  constructor() { }

  ngOnInit(): void {
  }
  stepperList=[
    {
      name:'Personal information',
      i:1,
      tag:`<mat-step >
      <ng-template matStepLabel>Person Responsible</ng-template>
      <h2 class="text-center mt-3">Person Responsible<span class="material-icons ml-3"(click)="addItem('perResbl')" >add_circle_outline</span></h2>
      <div class="row justify-content-center mt-3">
          <div class="col-1 my-auto"> 
              <button class="btn" matStepperPrevious><i class="fas fa-arrow-left"></i></button>
          </div>
          <div class="col-6">
            
              <mat-form-field class="container" appearance="fill">
                <mat-label>Person Responsible</mat-label>
                <mat-select formControlName="personResp">
                  <mat-option *ngFor="let person of staff" [value]="person._id">
                    {{person.title}}
                  </mat-option>
                </mat-select>
              </mat-form-field>
          </div>
          <div class="col-1 my-auto">
              <!-- <button class="btn" matStepperNext><i class="fas fa-arrow-right"></i></button> -->
          </div>
      </div>
  
      <div class="text-center mt-3">
        <button *ngIf="!jobTask?.set" class="btn btn-primary"(click)="setRelation()">Set</button>
        <button *ngIf="jobTask?.set" class="btn btn-primary"(click)="setRelation()">Update</button>
      </div>
    </mat-step>`
    },
    {
      name:'Bookings',
      i:0,
    },
    {
      name:'Reviews',
      i:0,
    },
    {
      name:'Confirm booking',
      i:0,
    }
  ]
  arr =[1,0,0,0]
  prev(item){
    if(this.count != this.stepperList.length+1){
      this.count--
      this.stepperList.map(x => {
        x.i = 0
      }) 
      this.stepperList[this.count].i = 1
      
    }
  }
  next(item){
    if(this.count != this.stepperList.length-1){
      this.count++
      this.stepperList.map(x => {
        x.i = 0
      }) 
      this.stepperList[this.count].i = 1
      
    }
  }
  handleClick(index){
    console.log(index)
    this.count = index
    this.stepperList.map(x => {
      x.i = 0
    }) 
    this.stepperList[this.count].i = 1
  }

}
