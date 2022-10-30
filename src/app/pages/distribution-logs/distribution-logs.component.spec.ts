import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionLogsComponent } from './distribution-logs.component';

describe('DistributionLogsComponent', () => {
	let component: DistributionLogsComponent;
	let fixture: ComponentFixture<DistributionLogsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DistributionLogsComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DistributionLogsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
