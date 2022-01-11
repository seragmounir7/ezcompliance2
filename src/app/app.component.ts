import { SessionManagementService } from './services/session-management.service';
import { AuthService } from './utils/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'adminlte';

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private sessionManagementService: SessionManagementService
  ) {
    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }
  ngOnInit(): void {
    this.authService.loginData$.subscribe((data) => {
      console.log('data', data);
      if (data) {
        // this.sessionManagementService.startSession(20);
      }
    });
  }
  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide(undefined,3000);
      }, 2000);
      console.log('NavigationStart');
    }
    if (event instanceof NavigationEnd) {
      this.spinner.hide(undefined,3000);
      console.log('NavigationEnd');
    }

    // Set loading state .hide() in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.spinner.hide(undefined,3000);
      console.log('NavigationCancel');
    }
    if (event instanceof NavigationError) {
      this.spinner.hide(undefined,3000);
      console.log('NavigationError');
    }
  }
}
