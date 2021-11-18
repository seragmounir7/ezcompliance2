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
      name:'HighRisk Construction',
      i:1,
      ref:'test'
    },
    {
      name:'PPE',
      i:0,
      ref:'test2'
    },
    {
      name:'Licence',
      i:0,
    },
    {
      name:'Identify Hazards',
      i:0,
    },
    {
      name:'Risk Level',
      i:0,
    },
    {
      name:'Control Action Required',
      i:0,
    },
    {
      name:'Code of Practice',
      i:0,
    },
    {
      name:'Residule Risk Level',
      i:0,
    },
    {
      name:'Chemical related Task',
      i:0,
    },
    {
      name:'Person Responsible',
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

ctx = {estimate: 'this.totalEstimate'};
}
