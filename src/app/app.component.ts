import { SessionManagementService } from './services/session-management.service';
import { AuthService } from './utils/services/auth.service';
import {
	Component,
	HostListener,
	OnInit,
	Renderer2,
	ViewChild
} from '@angular/core';
import {
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router,
	RouterEvent
} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { NavigationService } from './services/navigation.service';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'adminlte';
	@ViewChild('mainrouter') mainRouteroutlet: any;
	@HostListener('window:beforeprint', [])
	beforePrint() {
		this.renderer.addClass(document.querySelector('.wrapper'), 'hidden');
	}

	@HostListener('window:afterprint', [])
	afterPrint() {
		this.renderer.removeClass(document.querySelector('.wrapper'), 'hidden');
	}
	constructor(
		private router: Router,
		private spinner: NgxSpinnerService,
		private authService: AuthService,
		private sessionManagementService: SessionManagementService,
		private renderer: Renderer2,
		private navigationService: NavigationService
	) {
		router.events.subscribe((event: RouterEvent) => {
			this.navigationInterceptor(event);
		});
	}
	ngOnInit(): void {
		this.navigationService.startSaveHistory();
		this.authService.loginData$.subscribe((data) => {
			if (data) {
				// this.sessionManagementService.startSession(20);
			}
		});
	}
	navigationInterceptor(event: RouterEvent): void {
		if (event instanceof NavigationStart) {
			void this.spinner.show();
			// setTimeout(() => {
			// 	this.spinner.hide(undefined, 3000);
			// }, 2000);
		}
		if (event instanceof NavigationEnd) {
			this.spinner.hide();
		}

		// Set loading state .hide() in both of the below events to hide the spinner in case a request fails
		if (event instanceof NavigationCancel) {
			this.spinner.hide();
		}
		if (event instanceof NavigationError) {
			this.spinner.hide();
		}
	}
}
