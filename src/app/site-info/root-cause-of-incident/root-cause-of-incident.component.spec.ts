import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootCauseOfIncidentComponent } from './root-cause-of-incident.component';

describe('RootCauseOfIncidentComponent', () => {
	let component: RootCauseOfIncidentComponent;
	let fixture: ComponentFixture<RootCauseOfIncidentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [RootCauseOfIncidentComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(RootCauseOfIncidentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
