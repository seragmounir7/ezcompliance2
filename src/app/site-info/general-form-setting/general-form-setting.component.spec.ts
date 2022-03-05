import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralFormSettingComponent } from './general-form-setting.component';

describe('GeneralFormSettingComponent', () => {
	let component: GeneralFormSettingComponent;
	let fixture: ComponentFixture<GeneralFormSettingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GeneralFormSettingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GeneralFormSettingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
