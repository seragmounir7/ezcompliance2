import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleInspectionTableComponent } from './vehicle-inspection-table.component';

describe('VehicleInspectionTableComponent', () => {
	let component: VehicleInspectionTableComponent;
	let fixture: ComponentFixture<VehicleInspectionTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [VehicleInspectionTableComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(VehicleInspectionTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
