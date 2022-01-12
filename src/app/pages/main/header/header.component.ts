import { DynamicFormsService } from 'src/app/utils/services/dynamic-forms.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService } from 'src/app/utils/services/app.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenuSidebar: EventEmitter<any> = new EventEmitter<any>();
  public searchForm: FormGroup;

  constructor(
    private appService: AppService,
    private dynamicFormsService: DynamicFormsService
  ) { }
  currentComp = 'admin';
  ngOnInit() {
    this.searchForm = new FormGroup({
      search: new FormControl(null),
    });
    this.dynamicFormsService.homebarTitle.subscribe((res) => {
      this.currentComp = res;
    });
  }

  logout() {
    this.appService.logout();
  }
}
