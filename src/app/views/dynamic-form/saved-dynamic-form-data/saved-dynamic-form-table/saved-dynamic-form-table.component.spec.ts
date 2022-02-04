import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedDynamicFormTableComponent } from './saved-dynamic-form-table.component';

describe('SavedDynamicFormTableComponent', () => {
	let component: SavedDynamicFormTableComponent;
	let fixture: ComponentFixture<SavedDynamicFormTableComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SavedDynamicFormTableComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SavedDynamicFormTableComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
