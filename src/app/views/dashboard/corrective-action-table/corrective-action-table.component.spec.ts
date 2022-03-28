import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectiveActionTableComponent } from './corrective-action-table.component';

describe('CorrectiveActionTableComponent', () => {
	let component: CorrectiveActionTableComponent;
	let fixture: ComponentFixture<CorrectiveActionTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CorrectiveActionTableComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CorrectiveActionTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
