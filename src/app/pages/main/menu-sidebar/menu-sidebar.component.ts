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
      icon:'Dashboard',
      route:'/dashBoard'
    },
    {
      displayedName: 'Role Manangement',
      icon:'Role_Manangement',
      childItem :[
        {
          displayedName:'Roles',
          icon:'Roles',
          route:'/admin/roleMangement'
        }
      ]
    },
    {
      displayedName: 'Dynamic form',
      icon:'page',
      childItem :[
        {
          displayedName:'Forms',
          icon:'page',
          route:'/admin/dynamicFormsList'
        }
      ]
    },
    {
      displayedName: 'Logical forms',
      icon:'page',
      childItem :[
        {
          displayedName:'Forms',
          icon:'page',
          route:'/admin/forms'
        }
      ]
    },
    {
      displayedName: 'Form Configure',
      icon:'page',
      childItem :[
        {
          displayedName:'Set Relation',
          icon:'page',
          route:'/admin/confiLogi/setLogic'
        },
        {
          displayedName:'Set Job Number',
          icon:'page',
          route:'/admin/confiLogi/setJobNumber'
        },
        {
          displayedName:'Set Hazard Treatment',
          icon:'page',
          route:'/admin/confiLogi/setHazard'
        }
      ]
    },
    {
      displayedName: 'Subscription Rates',
      icon:'Subscription',
      childItem :[
        {
          displayedName:'Add Subscription',
          icon:'Add_Subsc',
          route:'/admin/subscrpt'
        },
        {
          displayedName:'Coupon',
          icon:'Subscription',
          route:'/admin/subscrpt/coupon'
        }
      ]
    },
    {
      displayedName: 'Logical Form Data',
      icon:'page',
      childItem :[
        {
          displayedName:'Site',
          icon:'site',
          route:'/admin/siteInfo/addSite'
        },
        {
          displayedName:'Customer',
          icon:'customer',
          route:'/admin/siteInfo/addCustomer'
        },
        {
          displayedName:'Project Manager',
          icon:'customer',
          route:'/admin/siteInfo/projMang'
        },
        {
          displayedName:'Job Task',
          icon:'job_task',
          route:'/admin/siteInfo/jobTask'
        },
        {
          displayedName:'High Risk Construct',
          icon:'Risk_construct',
          route:'/admin/siteInfo/highRisk'
        },
        {
          displayedName:'Licence And Qualification',
          icon:'license',
          route:'/admin/siteInfo/licenceAndQual'
        },
        {
          displayedName:'Trade Category',
          icon:'page',
          route:'/admin/siteInfo/licenceCat'
        },
        {
          displayedName:'PPE Selection',
          icon:'page',
          route:'/admin/siteInfo/ppeSel'
        },
        {
          displayedName:'Code Of Practice',
          icon:'page',
          route:'/admin/siteInfo/codeOfpract'
        },
        {
          displayedName:'Hazards',
          icon:'page',
          route:'/admin/siteInfo/hazards'
        },
        {
          displayedName:'Control And Action',
          icon:'page',
          route:'/admin/siteInfo/contrlActReq'
        },
        {
          displayedName:'Chemical',
          icon:'page',
          route:'/admin/siteInfo/chemical'
        },
        {
          displayedName:'Risk-Level',
          icon:'page',
          route:'/admin/siteInfo/riskLevel'
        },
        {
          displayedName:'Residual Risk Level',
          icon:'page',
          route:'/admin/siteInfo/residual'
        },
        {
          displayedName:'Staff',
          icon:'page',
          route:'/admin/siteInfo/staff'
        },
        {
          displayedName:'Manager',
          icon:'page',
          route:'/admin/siteInfo/manager'
        },
        {
          displayedName:'Whs-Manager',
          icon:'page',
          route:'/admin/siteInfo/WHS-Manager'
        },
        {
          displayedName:'Nature Of Incident',
          icon:'page',
          route:'/admin/siteInfo/natureOfIncident'
        },
        {
          displayedName:'Type Of Incident',
          icon:'page',
          route:'/admin/siteInfo/typeOfIncident'
        },
        {
          displayedName:'Changes Made',
          icon:'page',
          route:'/admin/siteInfo/changesMade'
        },
        {
          displayedName:'Root Cause Of Incident',
          icon:'page',
          route:'/admin/siteInfo/rootCauseOfIncident'
        },
        {
          displayedName:'Site Inspection Category',
          icon:'page',
          route:'/admin/siteInfo/siteinspectioncategory'
        }
      ]
    },
    {
      displayedName: 'CMS',
      icon:'page',
      childItem :[
        {
          displayedName:'Header',
          icon:'page',
          route:'/admin/landingPageInfo/header'
        },
        {
          displayedName:'Application Service Info',
          icon:'page',
          route:'/admin/landingPageInfo/applicationSerInfo'
        },
        {
          displayedName:'Safety Module',
          icon:'page',
          route:'/admin/landingPageInfo/safetyModule'
        },
        {
          displayedName:'Happy Client',
          icon:'page',
          route:'/admin/landingPageInfo/happyClient'
        },
        {
          displayedName:'Flexible',
          icon:'page',
          route:'/admin/landingPageInfo/flexible'
        },
        {
          displayedName:'CustomerTestimonial',
          icon:'page',
          route:'/admin/landingPageInfo/customer'
        },
        {
          displayedName:'About-Us',
          icon:'page',
          route:'/admin/landingPageInfo/aboutUs'
        },
        {
          displayedName:'Contact-Us',
          icon:'page',
          route:'/admin/landingPageInfo/contactUs'
        },
        {
          displayedName:'Our-Work(Section-1)',
          icon:'page',
          route:'/admin/landingPageInfo/ourWork'
        },
        { 
          displayedName:'Our-Work(Section-2)',
          icon:'page',
          route:'/admin/landingPageInfo/screenShot'
        },
        {
          displayedName:'Our-Work-(Section-3)',
          icon:'page',
          route:'/admin/landingPageInfo/different'
        },
        {
          displayedName:'FAQ',
          icon:'page',
          route:'/admin/landingPageInfo/faq'
        },
        {
          displayedName:'Q&A Section',
          icon:'page',
          route:'/admin/landingPageInfo/QA'
        },
        {
          displayedName:'Terms and Conditions',
          icon:'page',
          route:'/admin/landingPageInfo/term'
        },
        {
          displayedName:'Social Media',
          icon:'page',
          route:'/admin/landingPageInfo/socialMedia'
        }
      ]
    },
    {
      displayedName: 'State Relation',
      icon:'page',
      childItem :[
        {
          displayedName:'States',
          icon:'page',
          route:'/admin/stateRel/states'
        },
        {
          displayedName:'Jurisdiction',
          icon:'page',
          route:'/admin/stateRel/juridiction'
        },
        {
          displayedName:'Safety Legislation',
          icon:'page',
          route:'/admin/stateRel/safetyLegislation'
        },
        {
          displayedName:'Regulator',
          icon:'page',
          route:'/admin/stateRel/regulator'
        },
        {
          displayedName:'Set State Relation',
          icon:'page',
          route:'/admin/stateRel/setState'
        }
      ]
    },
  ]

}

interface NavItem {
  displayedName: string,
  icon:string,
  route?:string,
  childItem?:NavItem[]
}
