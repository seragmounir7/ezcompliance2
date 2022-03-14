import { TestBed } from '@angular/core/testing';

import { SuperAdminAuthServiceService } from './super-admin-auth-service.service';

describe('SuperAdminAuthServiceService', () => {
	let service: SuperAdminAuthServiceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SuperAdminAuthServiceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
