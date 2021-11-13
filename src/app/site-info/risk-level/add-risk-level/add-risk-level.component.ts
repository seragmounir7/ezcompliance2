import { Component, OnInit, Inject } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup,  Validators,FormArray,} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-risk-level',
  templateUrl: './add-risk-level.component.html',
  styleUrls: ['./add-risk-level.component.scss']
})
export class AddRiskLevelComponent implements OnInit {
  addRiskForm:FormGroup;
  constructor( 
    private fb:FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    private router: Router,
    ) { 
      this.addRiskForm=this.fb.group({
        arrObj: this.fb.array([]),
      })
    }

  ngOnInit(): void {
    this.addRisk();
  }
  addRisk() {
    {
      this.add().push(this.newAction());
    }
  }
  add(): FormArray {
    return this.addRiskForm.get('arrObj') as FormArray;
  }
  newAction(): FormGroup {
    return this.fb.group({
     
      title: ['', Validators.required],
    });
  }
  
  removeRisk(i) {
    const item = <FormArray>this.addRiskForm.controls['arrObj'];
    if (item.length > 1) {
      item.removeAt(i);
    
    }
  }
  onFormSubmit() {
    console.log(this.addRiskForm.value);
    let data={
      arrObj:this.addRiskForm.get('arrObj').value
    }
    this.logicalFormInfo.addMultipleRiskLevel(data).subscribe((data) => {
      console.log('chemical=>', data);
      this.router.navigate(['/admin/siteInfo/riskLevel']);      
    },(err)=>{console.error(err);} 
  
    );
    
  }

}
