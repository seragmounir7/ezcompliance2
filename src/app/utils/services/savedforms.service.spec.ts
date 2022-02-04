import { TestBed } from '@angular/core/testing';

import { SavedformsService } from './savedforms.service';

describe('SavedformsService', () => {
	let service: SavedformsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(SavedformsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
