import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlexibleInfoComponent } from './add-flexible-info.component';

describe('AddFlexibleInfoComponent', () => {
	let component: AddFlexibleInfoComponent;
	let fixture: ComponentFixture<AddFlexibleInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddFlexibleInfoComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddFlexibleInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
