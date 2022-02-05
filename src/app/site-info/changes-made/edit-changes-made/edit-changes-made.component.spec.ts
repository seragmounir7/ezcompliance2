import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChangesMadeComponent } from './edit-changes-made.component';

describe('EditChangesMadeComponent', () => {
	let component: EditChangesMadeComponent;
	let fixture: ComponentFixture<EditChangesMadeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditChangesMadeComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EditChangesMadeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
