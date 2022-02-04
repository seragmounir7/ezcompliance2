import { TestBed } from '@angular/core/testing';

import { LogicalFormInfoService } from './logical-form-info.service';

describe('LogicalFormInfoService', () => {
	let service: LogicalFormInfoService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LogicalFormInfoService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
