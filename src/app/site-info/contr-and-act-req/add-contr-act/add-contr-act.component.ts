import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormArray,
  
} from '@angular/forms'
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-contr-act',
  templateUrl: './add-contr-act.component.html',
  styleUrls: ['./add-contr-act.component.scss']
})
export class AddContrActComponent implements OnInit {

  contrlAndActFG!: FormGroup;
  formData: any;;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logicalFormInfo:LogicalFormInfoService
  ) { 
    this.contrlAndActFG=this.fb.group({
     // mode:"JobTask",
      arrObj: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.addAction();
  }
  addAction() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.contrlAndActFG.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeSafetyModule(i) {
    const item = <FormArray>this.contrlAndActFG.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.contrlAndActFG.value);
    let data={
      arrObj:this.contrlAndActFG.get('arrObj').value
    }
    this.logicalFormInfo.addMultipleContrlActReq(data).subscribe((data) => {
      console.log('PPE=>', data);
      this.router.navigate(['/admin/siteInfo/contrlActReq']);      
    },(err)=>{console.error(err);} 
  
    );
    
  }
}
