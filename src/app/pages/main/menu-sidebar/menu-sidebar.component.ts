import { NavItem } from './nav-items';
import { NavItems } from "./NavItems";
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
  activeNavValue: string;
  navItems: NavItem[]

  constructor(public appService: AppService, private setTitle: SetTitleService, private router: Router) {
    this.navItems = (new NavItems()).navItems
   }

  ngOnInit() {
    console.log("logo=>", this.logoUrl);

    console.log(this.router.url);
    let rLink = this.router.url;
    this.navItems.forEach(x => this.treeArr.push(false))
    if (rLink === '/admin/roleMangement') {
      this.menuOpen1(1);
    }
    else if (rLink === '/admin/dynamic/dynamicFormsList') {
      this.menuOpen1(2);
    }
    else if (rLink === '/admin/forms') {
      this.menuOpen1(3);
    }
    else if (rLink === '/admin/confiLogi/setLogic' || rLink === '/admin/confiLogi/setJobNumber') {
      this.menuOpen1(4);
    }
    else if (rLink === '/admin/siteInfo/addSite' || rLink === '/admin/siteInfo/addCustomer' || rLink === '/admin/siteInfo/jobTask' || rLink === '/admin/siteInfo/highRisk' || rLink === '/admin/siteInfo/licenceAndQual' || rLink === '/admin/siteInfo/licenceCat' || rLink === '/admin/siteInfo/ppeSel' || rLink === '/admin/siteInfo/hazards' || rLink === '/admin/siteInfo/contrlActReq' || rLink === '/admin/siteInfo/chemical' || rLink === '/admin/siteInfo/riskLevel' || rLink === '/admin/siteInfo/riskLevel' || rLink === '/admin/siteInfo/staff') {
      this.menuOpen1(5);
    } else if (rLink === '/admin/savedForms') {
      this.menuOpen1(6);
    }
    else if (rLink === '/admin/forms/fillConfigForm') {
      this.menuOpen1(7);
    }


    this.setTitle.setTitle('WHS-Menu Sidebar');
    this.navItems.map((x:NavItem) => {
      // x.hasAccess = true
      if(x.childItem){
        x.menuOpen = false
        x.childItem.map((y:NavItem) => {
          console.log(y.childItem?true:false)
          y.childItem? (y.menuOpen= false):''
          return y
        })
      }

      x.childItem?(x.menuOpen = false) && x.childItem.map((y:NavItem) => {
        console.log(y.childItem?true:false)
        y.childItem? (y.menuOpen= false):''
        return y
      }):''
      return x
    })
    let Cobj,CCobj
    let obj = this.navItems.find(o => {
      if(o.childItem){
         Cobj = o.childItem.find(item => {
           if(item.childItem){
             CCobj = item.childItem.find(citem => {
              return citem.route === rLink
             })
           }
           return item.route === rLink
          })
      }
      return o.route === rLink ? o.route === rLink : Cobj? Cobj: CCobj
    });

    console.log(obj)
    obj?this.menuOpen(obj):false
    console.log(this.navItems)
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
  treeArr = [];
  menuOpen1(i) {
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
  // menuOpen1(key) {
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
 
  
  
  temp = [
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
          route:'/admin/dynamic/dynamicFormsList'
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

  menuOpen(item: NavItem){
    if(item.menuOpen){
      this.activeNavValue = item.displayedName
      this.navItems.map((x:NavItem) => {
       if( x.displayedName==item.displayedName){
         console.log( x.displayedName,'==',item.displayedName, x.displayedName==item.displayedName,x.menuOpen)
        x.menuOpen = false
        console.log(x.menuOpen)
       }
        return x
      })

      this.activeNavValue = item.displayedName
      this.navItems.map((x:NavItem) => {
        x.childItem? x.childItem.map(y => {
          if(y.displayedName == item.displayedName){
            y.menuOpen = false
          }
          return y
        }):''
        return x
      })
      return
    }
    console.log(item)
    this.navItems.map((x:NavItem) => {
      // x.hasAccess = true
      // console.log(item.displayedName ,'==', x.displayedName,item.displayedName == x.displayedName)
      if(x.childItem && x.menuOpen == false && item.displayedName == x.displayedName){
        x.menuOpen = true
      }
      x.childItem? x.childItem.map(y => {
      console.log(item.displayedName ,'==', y.displayedName,item.displayedName == y.displayedName,y.childItem && y.menuOpen == false && item.displayedName == y.displayedName)

        if(y.childItem && y.menuOpen == false && item.displayedName == y.displayedName){
          y.menuOpen = true
        }
        return y
      }):''
      // x.childItem?(x.menuOpen = item.displayedName == x.displayedName) && x.childItem.map((y:NavItem) => {
      //   y.childItem? x.menuOpen=true && (y.menuOpen= item.displayedName == y.displayedName):''
      //   return y
      // }):''
      return x
    })
    

    }
    

  isActiveRoute(item: NavItem): boolean {
    console.log(item)
    // if (!item.route) {
    //   return false;
    // }

    // let routeIndex = this.router.url.indexOf("?"),
    //   isExact = routeIndex > -1 ? false : true;

    // if (item.route == "/web/manage-users/user" || item.route == "/web/client")
    //   isExact = true;

    // return this.router.isActive(item.route, isExact);

    if(!item.route && item.childItem && item.childItem.length>0){
      const childItem = item.childItem.find(x => {
        console.log(x.route ,'==', this.router.url,x.route == this.router.url)
       return x.route && x.route == this.router.url
      });
      console.log(childItem,childItem ? true : false)
        return childItem ? true : false;
    } else if(item.route){
      console.log(item.route, '==', this.router.url,item.route == this.router.url)
      return item.route == this.router.url ? true : false;
    } else {
      return false;
    }

  }

}


