import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSafetyModuleComponent } from './add-safety-module.component';

describe('AddSafetyModuleComponent', () => {
	let component: AddSafetyModuleComponent;
	let fixture: ComponentFixture<AddSafetyModuleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddSafetyModuleComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddSafetyModuleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
