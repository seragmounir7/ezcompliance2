import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormCategoriesComponent } from './add-form-categories.component';

describe('AddFormCategoriesComponent', () => {
	let component: AddFormCategoriesComponent;
	let fixture: ComponentFixture<AddFormCategoriesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddFormCategoriesComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddFormCategoriesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
