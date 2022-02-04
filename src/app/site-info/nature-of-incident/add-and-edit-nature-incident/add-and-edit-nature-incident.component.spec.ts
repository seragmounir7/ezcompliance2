import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditNatureIncidentComponent } from './add-and-edit-nature-incident.component';

describe('AddAndEditNatureIncidentComponent', () => {
	let component: AddAndEditNatureIncidentComponent;
	let fixture: ComponentFixture<AddAndEditNatureIncidentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddAndEditNatureIncidentComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddAndEditNatureIncidentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
