import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedFormsComponent } from './saved-forms.component';

describe('SavedFormsComponent', () => {
	let component: SavedFormsComponent;
	let fixture: ComponentFixture<SavedFormsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SavedFormsComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SavedFormsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
