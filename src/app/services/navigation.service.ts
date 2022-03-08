import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Injectable()
export class NavigationService {
	private history: string[] = [];

	constructor(private router: Router, private location: Location) {}

	public startSaveHistory(): void {
		this.router.events.subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.history.push(event.urlAfterRedirects);
				localStorage.setItem(
					'returnUrl',
					btoa(this.getPreviousUrl() || this.returnUrl)
				);
			}
		});
	}

	public getHistory(): string[] {
		return this.history;
	}

	public goBack(): void {
		const returnUrl = this.history.pop();

		if (this.history.length > 0) {
			this.location.back();
			// this.router.navigate([this.history[this.history.length - 1]])
		} else {
			this.router.navigateByUrl(this.returnUrl);
		}
	}

	public getPreviousUrl(): string {
		if (this.history.length > 0) {
			return this.history[this.history.length - 2];
		}

		return '';
	}
	get returnUrl(): string {
		return this.getPreviousUrl() || atob(localStorage.getItem('returnUrl'));
	}
}
