import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingCustComponent } from './adding-cust.component';

describe('AddingCustComponent', () => {
	let component: AddingCustComponent;
	let fixture: ComponentFixture<AddingCustComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddingCustComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddingCustComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
