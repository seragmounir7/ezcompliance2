import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantRegistrationComponent } from './plant-registration.component';

describe('PlantRegistrationComponent', () => {
	let component: PlantRegistrationComponent;
	let fixture: ComponentFixture<PlantRegistrationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PlantRegistrationComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PlantRegistrationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
