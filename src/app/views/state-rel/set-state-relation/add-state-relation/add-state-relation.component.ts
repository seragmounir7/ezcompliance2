import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingPageInfoServiceService } from 'src/app/utils/services/landing-page-info-service.service';
import { LogicalFormInfoService } from 'src/app/utils/services/logical-form-info.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-state-relation',
  templateUrl: './add-state-relation.component.html',
  styleUrls: ['./add-state-relation.component.scss']
})
export class AddStateRelationComponent implements OnInit {
  SetState!: FormGroup;
  states = null;
  stateId = null;
  // PPESelectionData: [];
  // licenseAndQual: [];
  // allHazards: [];
  // allContrlActReq: [];
  // licenceCatAll: [];


  JurisdictionData: [];
  safety: [];
  codeData: [];
  regulatorData: [];
  isLinear = false;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private logicalFormInfo: LogicalFormInfoService,
    public router: Router,) { }

  ngOnInit(): void {
    this.SetState = this.fb.group({
      jurisdiction: ['',Validators.required],
      safetyLegislation: ['',Validators.required],
     
      regulator: ['',Validators.required],
   
    });
    this.route
      .queryParams
      .subscribe((id) => {
        console.log(id);
        this.stateId = id.id;
        
       this.logicalFormInfo.getstatesById(this.stateId).subscribe((res: any) => {
          console.log("getstatesById=>",res);
          this.states = res.data;
          console.log( "states",this.states);
          if (this.states.set == true) {
            this.SetState.patchValue({
              jurisdiction: this.states.jurisdiction,
              safetyLegislation: this.states.safetyLegislation,
           
              regulator: this.states.regulator,
            
            });
          }
        })
      });
  

    this.getAllJurisdiction();
    this.getAllSafe();
    this.getAllRegulator();
  
  }

  getAllRegulator() {
    this.logicalFormInfo.getAllRegulator().subscribe((res: any) => {
      console.log("this.regulatorData", res.data)
      this.regulatorData = res.data;

    })
  }
 
  getAllSafe() {
    this.logicalFormInfo.getAllSafety().subscribe((res: any) => {
      console.log("this.safety", res)
      this.safety = res.data
    })
  }
  getAllJurisdiction() {
    this.logicalFormInfo.getAllJurisdiction().subscribe((res: any) => {
      console.log('JurisdictionData=>', res);
      this.JurisdictionData = res.data;
    });
  }
 
setRelation(){
  let data ={
    set:true,
    title:this.states.title,
    jurisdiction: this.SetState.get('jurisdiction').value,
    safetyLegislation: this.SetState.get('safetyLegislation').value,
     regulator:  this.SetState.get('regulator').value,
  }
  console.log("data=>",data)
  console.log("stateId=>",this.stateId)
  this.logicalFormInfo.updateStates(data,this.stateId).subscribe((res: any) => {
    console.log('updateStates=>', res);
  
    Swal.fire({
      title: 'Updated successfully',
      showConfirmButton: false,
      timer: 1200,
    });
    this.router.navigate(['/admin/stateRel/setState'])
  });
 
}
}
