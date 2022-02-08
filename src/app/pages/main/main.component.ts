import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {
	AfterViewInit,
	Component,
	ElementRef,
	OnInit,
	Renderer2,
	ViewChild
} from '@angular/core';
import { MobileViewService } from 'src/app/utils/services/mobile-view.service';

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
		private mobileViewService: MobileViewService
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
			console.log(result);
			if (result.matches) {
				this.renderer.removeClass(
					document.querySelector('app-root'),
					'sidebar-open'
				);
				if (this.contentWrapper)
					this.contentWrapper.nativeElement.classList.remove(
						'content-wrapper'
					);
			} else {
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

	mainSidebarHeight(height) {
		// this.renderer.setStyle(
		//   this.contentWrapper.nativeElement,
		//   'min-height',
		//   height - 114 + 'px'
		// );
	}

	toggleMenuSidebar() {
		if (this.sidebarMenuOpened) {
			this.logoUrl = 'sm-logo';
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
			this.logoUrl = 'logo';
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
