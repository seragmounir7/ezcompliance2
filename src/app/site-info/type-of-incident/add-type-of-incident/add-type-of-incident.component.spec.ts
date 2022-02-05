import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeOfIncidentComponent } from './add-type-of-incident.component';

describe('AddTypeOfIncidentComponent', () => {
	let component: AddTypeOfIncidentComponent;
	let fixture: ComponentFixture<AddTypeOfIncidentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddTypeOfIncidentComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddTypeOfIncidentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
