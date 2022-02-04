import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFlexibleInfoComponent } from './edit-flexible-info.component';

describe('EditFlexibleInfoComponent', () => {
	let component: EditFlexibleInfoComponent;
	let fixture: ComponentFixture<EditFlexibleInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditFlexibleInfoComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EditFlexibleInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
