import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild
} from '@angular/core';
import { AuthService } from 'src/app/utils/services/auth.service';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';
import { Designation } from 'src/app/utils/types/Designation.enum';

import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy({ checkProperties: true })
@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
	public sidebarMenuOpened = true;
	@ViewChild('contentWrapper', { static: false })
	contentWrapper: ElementRef<HTMLElement>;

	logoUrl: string = 'logo';
	constructor(
		private renderer: Renderer2,
		public mobileViewService: MobileViewService,
		private authService: AuthService
	) {}
	ngAfterViewInit(): void {
		if (this.mobileViewService.isXsmall) {
			this.contentWrapper.nativeElement.classList.remove(
				'content-wrapper'
			);
		}
	}

	ngOnInit() {
		this.mobileViewService.observeXsmall().subscribe((result) => {
			if (result.matches) {
				this.renderer.addClass(
					document.querySelector('app-header'),
					'hide'
				);
				this.renderer.removeClass(
					document.querySelector('app-root'),
					'sidebar-open'
				);
				if (this.contentWrapper)
					this.contentWrapper.nativeElement.classList.remove(
						'content-wrapper'
					);
			} else {
				this.renderer.removeClass(
					document.querySelector('app-header'),
					'hide'
				);
				this.contentWrapper
					? this.contentWrapper.nativeElement.classList.add(
							'content-wrapper'
					  )
					: '';
			}
		});
		this.renderer.removeClass(
			document.querySelector('app-root'),
			'login-page'
		);
		this.renderer.removeClass(
			document.querySelector('app-root'),
			'register-page'
		);
	}

	toggleMenuSidebar() {
		if (this.sidebarMenuOpened) {
			this.authService.loginData$.subscribe((res) => {
				if (res.designation === Designation.clientAdmin) {
					this.logoUrl = res.companyLogo;
				} else {
					this.logoUrl = 'sm-logo';
				}
			});
			this.renderer.removeClass(
				document.querySelector('app-root'),
				'sidebar-open'
			);
			this.renderer.addClass(
				document.querySelector('app-root'),
				'sidebar-collapse'
			);
			this.renderer.addClass(
				document.querySelector('app-root'),
				'sidebar-mini'
			);
			this.sidebarMenuOpened = false;
		} else {
			this.authService.loginData$.subscribe((res) => {
				if (res.designation === Designation.clientAdmin) {
					this.logoUrl = res.companyLogo;
				} else {
					this.logoUrl = 'logo';
				}
			});
			this.renderer.removeClass(
				document.querySelector('app-root'),
				'sidebar-collapse'
			);
			this.renderer.removeClass(
				document.querySelector('app-root'),
				'sidebar-mini'
			);
			this.renderer.addClass(
				document.querySelector('app-root'),
				'sidebar-open'
			);
			this.sidebarMenuOpened = true;
		}
	}
}
