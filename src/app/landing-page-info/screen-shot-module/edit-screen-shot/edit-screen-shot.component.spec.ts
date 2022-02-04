import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScreenShotComponent } from './edit-screen-shot.component';

describe('EditScreenShotComponent', () => {
	let component: EditScreenShotComponent;
	let fixture: ComponentFixture<EditScreenShotComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditScreenShotComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EditScreenShotComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
