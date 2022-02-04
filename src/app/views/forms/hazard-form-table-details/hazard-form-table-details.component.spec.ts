import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HazardFormTableDetailsComponent } from './hazard-form-table-details.component';

describe('HazardFormTableDetailsComponent', () => {
	let component: HazardFormTableDetailsComponent;
	let fixture: ComponentFixture<HazardFormTableDetailsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HazardFormTableDetailsComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HazardFormTableDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
