import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWhsManagerComponent } from './edit-whs-manager.component';

describe('EditWhsManagerComponent', () => {
	let component: EditWhsManagerComponent;
	let fixture: ComponentFixture<EditWhsManagerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditWhsManagerComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EditWhsManagerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
