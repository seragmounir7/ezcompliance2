import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProjMangComponent } from './add-edit-proj-mang.component';

describe('AddEditProjMangComponent', () => {
	let component: AddEditProjMangComponent;
	let fixture: ComponentFixture<AddEditProjMangComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddEditProjMangComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddEditProjMangComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
