import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState
} from '@angular/cdk/layout';
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class MobileViewService {
	private renderer: Renderer2;
	constructor(
		private breakpointObserver: BreakpointObserver,
		rendererFactory: RendererFactory2,
		activatedRoute: ActivatedRoute
	) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	observeXsmall(): Observable<BreakpointState> {
		return this.breakpointObserver.observe([Breakpoints.XSmall]);
	}
	get isXsmall(): boolean {
		return this.breakpointObserver.isMatched(Breakpoints.XSmall);
	}

	get isMobile(): Observable<boolean> {
		return this.breakpointObserver
			.observe([Breakpoints.XSmall])
			.pipe(map((value: BreakpointState) => value.matches));
	}
	removeButton() {
		return this.observeXsmall().subscribe((result) => {
			console.log(result);

			if (result.matches) {
				this.renderer.addClass(
					document.querySelector('.btn.btn-outline-primary'),
					'hide'
				);
			} else {
				this.renderer.removeClass(
					document.querySelector('.btn.btn-outline-primary'),
					'hide'
				);
			}
		});
	}
}
