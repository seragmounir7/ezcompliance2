import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResidualRiskLevelComponent } from './add-residual-risk-level.component';

describe('AddResidualRiskLevelComponent', () => {
	let component: AddResidualRiskLevelComponent;
	let fixture: ComponentFixture<AddResidualRiskLevelComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddResidualRiskLevelComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddResidualRiskLevelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
