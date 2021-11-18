import { value } from './../../../views/dynamic-form/global.model';
import { Router } from '@angular/router';
import { element } from 'protractor';
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
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
  constructor(public appService: AppService, private setTitle: SetTitleService,private router:Router) {}

  ngOnInit() {
    console.log(this.router.url);
    let rLink =this.router.url;
    if(rLink ==='/admin/dynamicFormsList'){
      this.menuOpen(0) ;
   }
   else if(rLink==='/admin/forms'){
    this.menuOpen(1) ;
    }
   else if(rLink==='/admin/confiLogi/setLogic' ||rLink==='/admin/confiLogi/setJobNumber'){
    this.menuOpen(2) ;
    }
    else if(rLink==='/admin/siteInfo/addSite'||rLink==='/admin/siteInfo/addCustomer'||rLink==='/admin/siteInfo/jobTask'||rLink==='/admin/siteInfo/highRisk'||rLink==='/admin/siteInfo/licenceAndQual'||rLink==='/admin/siteInfo/licenceCat'||rLink==='/admin/siteInfo/ppeSel'||rLink==='/admin/siteInfo/hazards'||rLink==='/admin/siteInfo/contrlActReq'||rLink==='/admin/siteInfo/chemical'||rLink==='/admin/siteInfo/riskLevel'||rLink==='/admin/siteInfo/riskLevel'||rLink==='/admin/siteInfo/staff'){
      this.menuOpen(4) ;
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
  treeArr=[false,false,false,false,false,false,false];
  menuOpen(i){
    let temp =this.treeArr[i];
    this.resetAll();
    this.treeArr[i]=!temp;
  }
  resetAll(){
  for(let i=0;i<this.treeArr.length ;i++){
    this.treeArr[i] =false;
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

}
