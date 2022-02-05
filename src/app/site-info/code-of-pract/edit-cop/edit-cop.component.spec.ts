import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCOPComponent } from './edit-cop.component';

describe('EditCOPComponent', () => {
	let component: EditCOPComponent;
	let fixture: ComponentFixture<EditCOPComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditCOPComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EditCOPComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
