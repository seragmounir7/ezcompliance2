import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCOPComponent } from './add-cop.component';

describe('AddCOPComponent', () => {
	let component: AddCOPComponent;
	let fixture: ComponentFixture<AddCOPComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddCOPComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddCOPComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
