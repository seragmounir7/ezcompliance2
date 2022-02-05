import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSiteInfoComponent } from './add-site-info.component';

describe('AddSiteInfoComponent', () => {
	let component: AddSiteInfoComponent;
	let fixture: ComponentFixture<AddSiteInfoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddSiteInfoComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddSiteInfoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
