import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssessmentSettingComponent } from './risk-assessment-setting.component';

describe('RiskAssessmentSettingComponent', () => {
	let component: RiskAssessmentSettingComponent;
	let fixture: ComponentFixture<RiskAssessmentSettingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RiskAssessmentSettingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RiskAssessmentSettingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
