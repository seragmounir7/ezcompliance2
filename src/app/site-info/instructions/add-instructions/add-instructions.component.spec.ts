import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInstructionsComponent } from './add-instructions.component';

describe('AddInstructionsComponent', () => {
	let component: AddInstructionsComponent;
	let fixture: ComponentFixture<AddInstructionsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddInstructionsComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddInstructionsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
