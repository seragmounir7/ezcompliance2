import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfIncidentComponent } from './type-of-incident.component';

describe('TypeOfIncidentComponent', () => {
	let component: TypeOfIncidentComponent;
	let fixture: ComponentFixture<TypeOfIncidentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TypeOfIncidentComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(TypeOfIncidentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
