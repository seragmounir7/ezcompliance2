import { AuthService } from './../utils/services/auth.service';
import { Injectable } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
@Injectable({
	providedIn: 'root'
})
export class SessionManagementService {
	constructor(
		private bnIdle: BnNgIdleService,
		private authService: AuthService
	) {}

	startSession(time: number) {
		this.bnIdle.startWatching(time).subscribe((res) => {
			if (res) {
				this.authService.logout();
			}
		});
	}
	resetSession() {
		this.bnIdle.resetTimer();
	}
	stopSession() {
		this.bnIdle.stopTimer();
	}
}
