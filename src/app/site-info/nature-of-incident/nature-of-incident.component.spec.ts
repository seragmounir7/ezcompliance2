import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureOfIncidentComponent } from './nature-of-incident.component';

describe('NatureOfIncidentComponent', () => {
	let component: NatureOfIncidentComponent;
	let fixture: ComponentFixture<NatureOfIncidentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NatureOfIncidentComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NatureOfIncidentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
