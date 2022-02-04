import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHighRiskConstructionComponent } from './edit-high-risk-construction.component';

describe('EditHighRiskConstructionComponent', () => {
	let component: EditHighRiskConstructionComponent;
	let fixture: ComponentFixture<EditHighRiskConstructionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditHighRiskConstructionComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EditHighRiskConstructionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
