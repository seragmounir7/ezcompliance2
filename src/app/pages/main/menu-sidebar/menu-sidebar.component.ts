import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { AppService } from 'src/app/utils/services/app.service';

@Component({
  selector: 'app-menu-sidebar',
  templateUrl: './menu-sidebar.component.html',
  styleUrls: ['./menu-sidebar.component.scss'],
})
export class MenuSidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('mainSidebar', { static: false }) mainSidebar;
  @Output() mainSidebarHeight: EventEmitter<any> = new EventEmitter<any>();
  constructor(public appService: AppService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.mainSidebarHeight.emit(this.mainSidebar.nativeElement.offsetHeight);
  }
  step = false;
  stepL = false;
  subscription = false;
  siteInfoVal = false;
  static = false;
  menuOpen(key) {
    if(key ==='dynamic'){
      this.stepL = false;
      this.static = false;
      this.subscription = false;
      this.siteInfoVal = false;
      this.step = !this.step;
    }
    if(key ==='subscription'){
      this.stepL = false;
      this.static = false;
      this.siteInfoVal = false;
      this.step=false;
      this.subscription = !this.subscription;
    }
    if(key ==='siteInfo'){
      this.stepL = false;
      this.static = false;
      this.subscription = false;
      this.step=false;
      this.siteInfoVal = !this.siteInfoVal;
    }
    if(key ==='landingPageInfo'){
      this.subscription = false;
      this.static = false;
      this.siteInfoVal = false;
      this.step=false;
      this.stepL = !this.stepL;
    }
    if(key ==='static'){
      this.stepL = false;
      this.subscription = false;
      this.siteInfoVal = false;
      this.step=false;
      this.static = !this.static;
    }

  }
  // landingPageEditOpen() {
  //   this.stepL = !this.stepL;
  // }
  // subscriptionFun() {
  //   this.subscription = !this.subscription;
  // }
  // siteInfo() {
  //   this.siteInfoVal = !this.siteInfoVal;
  // }
}
