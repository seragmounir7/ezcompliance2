import { TestBed } from '@angular/core/testing';

import { IsPrintGuard } from './is-print.guard';

describe('IsPrintGuard', () => {
	let guard: IsPrintGuard;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		guard = TestBed.inject(IsPrintGuard);
	});

	it('should be created', () => {
		expect(guard).toBeTruthy();
	});
});
