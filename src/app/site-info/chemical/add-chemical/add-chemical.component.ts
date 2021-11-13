import { Component, OnInit, Inject } from '@angular/core';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import { FormBuilder, FormGroup,  Validators,
  FormArray,} from '@angular/forms';

import { Router } from '@angular/router';
@Component({
  selector: 'app-add-chemical',
  templateUrl: './add-chemical.component.html',
  styleUrls: ['./add-chemical.component.scss']
})
export class AddChemicalComponent implements OnInit {
  addChemicalForm: FormGroup;
  constructor( 
    private fb:FormBuilder,
    private logicalFormInfo: LogicalFormInfoService,
    private router: Router,
    ) { 
      this.addChemicalForm=this.fb.group({
        arrObj: this.fb.array([]),
      })
    }

    ngOnInit(): void {
      this.addChemical();
    }
    addChemical() {
      {
        this.add().push(this.newAction());
      }
    }
    add(): FormArray {
      return this.addChemicalForm.get('arrObj') as FormArray;
    }
    newAction(): FormGroup {
      return this.fb.group({
       
        title: ['', Validators.required],
      });
    }
    
    removeChemical(i) {
      const item = <FormArray>this.addChemicalForm.controls['arrObj'];
      if (item.length > 1) {
        item.removeAt(i);
      
      }
    }
    onFormSubmit() {
      console.log(this.addChemicalForm.value);
      let data={
        arrObj:this.addChemicalForm.get('arrObj').value
      }
      this.logicalFormInfo.addMultipleChemical(data).subscribe((data) => {
        console.log('chemical=>', data);
        this.router.navigate(['/admin/siteInfo/chemical']);      
      },(err)=>{console.error(err);} 
    
      );
      
    }
  }