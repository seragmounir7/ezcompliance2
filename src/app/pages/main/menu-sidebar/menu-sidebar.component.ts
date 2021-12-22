import { value } from './../../../views/dynamic-form/global.model';
import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';
import { SetTitleService } from 'src/app/utils/services/set-title.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
  @Input() logoUrl
  constructor(public appService: AppService, private setTitle: SetTitleService, private router: Router) { }

  ngOnInit() {
    console.log("logo=>", this.logoUrl);

    console.log(this.router.url);
    let rLink = this.router.url;
    if (rLink === '/admin/roleMangement') {
      this.menuOpen(1);
    }
    else if (rLink === '/admin/dynamicFormsList') {
      this.menuOpen(2);
    }
    else if (rLink === '/admin/forms') {
      this.menuOpen(3);
    }
    else if (rLink === '/admin/confiLogi/setLogic' || rLink === '/admin/confiLogi/setJobNumber') {
      this.menuOpen(4);
    }
    else if (rLink === '/admin/siteInfo/addSite' || rLink === '/admin/siteInfo/addCustomer' || rLink === '/admin/siteInfo/jobTask' || rLink === '/admin/siteInfo/highRisk' || rLink === '/admin/siteInfo/licenceAndQual' || rLink === '/admin/siteInfo/licenceCat' || rLink === '/admin/siteInfo/ppeSel' || rLink === '/admin/siteInfo/hazards' || rLink === '/admin/siteInfo/contrlActReq' || rLink === '/admin/siteInfo/chemical' || rLink === '/admin/siteInfo/riskLevel' || rLink === '/admin/siteInfo/riskLevel' || rLink === '/admin/siteInfo/staff') {
      this.menuOpen(5);
    }

    this.setTitle.setTitle('WHS-Menu Sidebar');
  }

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }
  dynamic = false;
  landingPageVal = false;
  subscription = false;
  siteInfoVal = false;
  static = false;
  confiLogic = false;
  stateRel = false;
  treeArr = [false,false, false, false, false, false, false, false];
  menuOpen(i) {
    let temp = this.treeArr[i];
    this.resetAll();
    this.treeArr[i] = !temp;
    console.log(i,temp,this.treeArr);
    
  }
  resetAll() {
    for (let i = 0; i < this.treeArr.length; i++) {
      this.treeArr[i] = false;
    }
    // resetAll(j){
    // for(let i=0;i<this.treeArr.length && j!=i;i++){
    //   this.treeArr[i] =false;
    // }
  }
  // menuOpen(key) {
  //   if (key != 'dynamic') this.dynamic = false;
  //   if (key != 'subscription') this.subscription = false;
  //   if (key != 'siteInfo') this.siteInfoVal = false;
  //   if (key != 'landingPageInfo') this.landingPageVal = false;
  //   if (key != 'static') this.static = false;
  //   if (key != 'confiLogic') this.confiLogic = false;
  //   if (key != 'stateRel') this.confiLogic = false;

  //   if (key === 'dynamic') this.dynamic = !this.dynamic;
  //   else if (key === 'subscription') this.subscription = !this.subscription;
  //   else if (key === 'siteInfo') this.siteInfoVal = !this.siteInfoVal;
  //   else if (key === 'landingPageInfo')  this.landingPageVal = !this.landingPageVal;
  //   else if (key === 'static') this.static = !this.static;
  //   else if (key === 'confiLogic') this.confiLogic = !this.confiLogic;
  //   else if (key === 'stateRel') this.stateRel = !this.stateRel;
  // }
  // resetAll(){
  //   this.dynamic = false;
  //   this.landingPageVal = false;
  //   this.subscription = false;
  //   this.siteInfoVal = false;
  //   this.static = false; 
  //   this.confiLogic = false; 
  //   this.stateRel = false; 
  // }
  navItems:NavItem[] = [
    {
      displayedName: 'Dashboard',
      route:'/dashBoard'
    },
    {
      displayedName: 'Role Manangement',
      childItem :[
        {
          displayedName:'Roles',
          route:'/admin/roleMangement'
        }
      ]
    },
    {
      displayedName: 'Dynamic form',
      childItem :[
        {
          displayedName:'Forms',
          route:'/admin/dynamicFormsList'
        }
      ]
    },
    {
      displayedName: 'Logical forms',
      childItem :[
        {
          displayedName:'Forms',
          route:'/admin/forms'
        }
      ]
    },
    {
      displayedName: 'Form Configure',
      childItem :[
        {
          displayedName:'Set Relation',
          route:'/admin/confiLogi/setLogic'
        },
        {
          displayedName:'Set Job Number',
          route:'/admin/confiLogi/setJobNumber'
        },
        {
          displayedName:'Set Hazard Treatment',
          route:'/admin/confiLogi/setHazard'
        }
      ]
    },
    {
      displayedName: 'Subscription Rates',
      childItem :[
        {
          displayedName:'Add Subscription',
          route:'/admin/subscrpt'
        },
        {
          displayedName:'Coupon',
          route:'/admin/subscrpt/coupon'
        }
      ]
    },
    {
      displayedName: 'Logical Form Data',
      childItem :[
        {
          displayedName:'Site',
          route:'/admin/siteInfo/addSite'
        },
        {
          displayedName:'Customer',
          route:'/admin/siteInfo/addCustomer'
        },
        {
          displayedName:'Project Manager',
          route:'/admin/siteInfo/projMang'
        },
        {
          displayedName:'Job Task',
          route:'/admin/siteInfo/jobTask'
        },
        {
          displayedName:'High Risk Construct',
          route:'/admin/siteInfo/highRisk'
        },
        {
          displayedName:'Licence And Qualification',
          route:'/admin/siteInfo/licenceAndQual'
        },
        {
          displayedName:'Trade Category',
          route:'/admin/siteInfo/licenceCat'
        },
        {
          displayedName:'PPE Selection',
          route:'/admin/siteInfo/ppeSel'
        },
        {
          displayedName:'Code Of Practice',
          route:'/admin/siteInfo/codeOfpract'
        },
        {
          displayedName:'Hazards',
          route:'/admin/siteInfo/hazards'
        },
        {
          displayedName:'Control And Action',
          route:'/admin/siteInfo/contrlActReq'
        },
        {
          displayedName:'Chemical',
          route:'/admin/siteInfo/chemical'
        },
        {
          displayedName:'Risk-Level',
          route:'/admin/siteInfo/riskLevel'
        },
        {
          displayedName:'Residual Risk Level',
          route:'/admin/siteInfo/residual'
        },
        {
          displayedName:'Staff',
          route:'/admin/siteInfo/staff'
        },
        {
          displayedName:'Manager',
          route:'/admin/siteInfo/manager'
        },
        {
          displayedName:'Whs-Manager',
          route:'/admin/siteInfo/WHS-Manager'
        },
        {
          displayedName:'Nature Of Incident',
          route:'/admin/siteInfo/natureOfIncident'
        },
        {
          displayedName:'Type Of Incident',
          route:'/admin/siteInfo/typeOfIncident'
        },
        {
          displayedName:'Changes Made',
          route:'/admin/siteInfo/changesMade'
        },
        {
          displayedName:'Root Cause Of Incident',
          route:'/admin/siteInfo/rootCauseOfIncident'
        },
        {
          displayedName:'Site Inspection Category',
          route:'/admin/siteInfo/siteinspectioncategory'
        }
      ]
    },
    {
      displayedName: 'CMS',
      childItem :[
        {
          displayedName:'Header',
          route:'/admin/landingPageInfo/header'
        },
        {
          displayedName:'Application Service Info',
          route:'/admin/landingPageInfo/applicationSerInfo'
        },
        {
          displayedName:'Safety Module',
          route:'/admin/landingPageInfo/safetyModule'
        },
        {
          displayedName:'Happy Client',
          route:'/admin/landingPageInfo/happyClient'
        },
        {
          displayedName:'Flexible',
          route:'/admin/landingPageInfo/flexible'
        },
        {
          displayedName:'CustomerTestimonial',
          route:'/admin/landingPageInfo/customer'
        },
        {
          displayedName:'About-Us',
          route:'/admin/landingPageInfo/aboutUs'
        },
        {
          displayedName:'Contact-Us',
          route:'/admin/landingPageInfo/contactUs'
        },
        {
          displayedName:'Our-Work(Section-1)',
          route:'/admin/landingPageInfo/ourWork'
        },
        { 
          displayedName:'Our-Work(Section-2)',
          route:'/admin/landingPageInfo/screenShot'
        },
        {
          displayedName:'Our-Work-(Section-3)',
          route:'/admin/landingPageInfo/different'
        },
        {
          displayedName:'FAQ',
          route:'/admin/landingPageInfo/faq'
        },
        {
          displayedName:'Q&A Section',
          route:'/admin/landingPageInfo/QA'
        },
        {
          displayedName:'Terms and Conditions',
          route:'/admin/landingPageInfo/term'
        },
        {
          displayedName:'Social Media',
          route:'/admin/landingPageInfo/socialMedia'
        }
      ]
    },
    {
      displayedName: 'State Relation',
      childItem :[
        {
          displayedName:'States',
          route:'/admin/stateRel/states'
        },
        {
          displayedName:'Jurisdiction',
          route:'/admin/stateRel/juridiction'
        },
        {
          displayedName:'Safety Legislation',
          route:'/admin/stateRel/safetyLegislation'
        },
        {
          displayedName:'Regulator',
          route:'/admin/stateRel/regulator'
        },
        {
          displayedName:'Set State Relation',
          route:'/admin/stateRel/setState'
        }
      ]
    },
  ]

}

interface NavItem {
  displayedName: string,
  route?:string,
  childItem?:NavItem[]
}
