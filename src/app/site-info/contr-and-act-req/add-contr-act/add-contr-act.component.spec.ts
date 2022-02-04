import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContrActComponent } from './add-contr-act.component';

describe('AddContrActComponent', () => {
	let component: AddContrActComponent;
	let fixture: ComponentFixture<AddContrActComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddContrActComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddContrActComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
