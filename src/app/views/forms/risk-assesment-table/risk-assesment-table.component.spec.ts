import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssesmentTableComponent } from './risk-assesment-table.component';

describe('RiskAssesmentTableComponent', () => {
	let component: RiskAssesmentTableComponent;
	let fixture: ComponentFixture<RiskAssesmentTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RiskAssesmentTableComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RiskAssesmentTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
