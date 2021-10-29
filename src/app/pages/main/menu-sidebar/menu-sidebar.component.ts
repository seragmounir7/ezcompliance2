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
  dynamic = false;
  landingPageVal = false;
  subscription = false;
  siteInfoVal = false;
  static = false;
  confiLogic = false;
  menuOpen(key) {
    if (key != 'dynamic') this.dynamic = false;

    if (key != 'subscription') this.subscription = false;

    if (key != 'siteInfo') this.siteInfoVal = false;

    if (key != 'landingPageInfo') this.landingPageVal = false;

    if (key != 'static') this.static = false;
    if (key != 'confiLogic') this.confiLogic = false;

    if (key === 'dynamic') this.dynamic = !this.dynamic;
    else if (key === 'subscription') this.subscription = !this.subscription;
    else if (key === 'siteInfo') this.siteInfoVal = !this.siteInfoVal;
    else if (key === 'landingPageInfo')
      this.landingPageVal = !this.landingPageVal;
    else if (key === 'static') this.static = !this.static;
    else if (key === 'confiLogic') this.confiLogic = !this.confiLogic;
  }
  resetAll(){
    this.dynamic = false;
    this.landingPageVal = false;
    this.subscription = false;
    this.siteInfoVal = false;
    this.static = false; 
    this.confiLogic = false; 
  }

}
