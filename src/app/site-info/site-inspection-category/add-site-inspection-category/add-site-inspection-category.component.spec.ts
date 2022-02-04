import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteInspectionCategoryComponent } from './add-site-inspection-category.component';

describe('AddSiteInspectionCategoryComponent', () => {
	let component: AddSiteInspectionCategoryComponent;
	let fixture: ComponentFixture<AddSiteInspectionCategoryComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddSiteInspectionCategoryComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddSiteInspectionCategoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
