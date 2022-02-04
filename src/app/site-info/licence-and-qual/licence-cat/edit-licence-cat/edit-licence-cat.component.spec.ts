import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLicenceCatComponent } from './edit-licence-cat.component';

describe('EditLicenceCatComponent', () => {
	let component: EditLicenceCatComponent;
	let fixture: ComponentFixture<EditLicenceCatComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [EditLicenceCatComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(EditLicenceCatComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
