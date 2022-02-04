import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubWorkComponent } from './add-sub-work.component';

describe('AddSubWorkComponent', () => {
	let component: AddSubWorkComponent;
	let fixture: ComponentFixture<AddSubWorkComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddSubWorkComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddSubWorkComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
