import { TestBed } from '@angular/core/testing';

import { FirstTimeLoginGuard } from './first-time-login.guard';

describe('FirstTimeLoginGuard', () => {
	let guard: FirstTimeLoginGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(FirstTimeLoginGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
