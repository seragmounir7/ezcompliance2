import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDynamicFormDataComponent } from './saved-dynamic-form-data.component';

describe('SavedDynamicFormDataComponent', () => {
	let component: SavedDynamicFormDataComponent;
	let fixture: ComponentFixture<SavedDynamicFormDataComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SavedDynamicFormDataComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SavedDynamicFormDataComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
