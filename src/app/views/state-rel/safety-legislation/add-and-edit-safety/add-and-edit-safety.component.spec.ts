import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditSafetyComponent } from './add-and-edit-safety.component';

describe('AddAndEditSafetyComponent', () => {
	let component: AddAndEditSafetyComponent;
	let fixture: ComponentFixture<AddAndEditSafetyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddAndEditSafetyComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddAndEditSafetyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
