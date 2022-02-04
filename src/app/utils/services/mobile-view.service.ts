import {
	BreakpointObserver,
	Breakpoints,
	BreakpointState
} from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class MobileViewService {
	constructor(private breakpointObserver: BreakpointObserver) {}

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
}
