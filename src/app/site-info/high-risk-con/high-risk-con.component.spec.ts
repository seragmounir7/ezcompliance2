import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiskConComponent } from './high-risk-con.component';

describe('HighRiskConComponent', () => {
	let component: HighRiskConComponent;
	let fixture: ComponentFixture<HighRiskConComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [HighRiskConComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(HighRiskConComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
