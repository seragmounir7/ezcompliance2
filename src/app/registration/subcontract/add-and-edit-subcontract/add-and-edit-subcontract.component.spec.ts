import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditSubcontractComponent } from './add-and-edit-subcontract.component';

describe('AddAndEditSubcontractComponent', () => {
	let component: AddAndEditSubcontractComponent;
	let fixture: ComponentFixture<AddAndEditSubcontractComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddAndEditSubcontractComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddAndEditSubcontractComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
