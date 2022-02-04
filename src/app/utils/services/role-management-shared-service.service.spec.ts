import { TestBed } from '@angular/core/testing';

import { RoleManagementSharedServiceService } from './role-management-shared-service.service';

describe('RoleManagementSharedServiceService', () => {
	let service: RoleManagementSharedServiceService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(RoleManagementSharedServiceService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
