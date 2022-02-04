import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskLevelComponent } from './risk-level.component';

describe('RiskLevelComponent', () => {
	let component: RiskLevelComponent;
	let fixture: ComponentFixture<RiskLevelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RiskLevelComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RiskLevelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
