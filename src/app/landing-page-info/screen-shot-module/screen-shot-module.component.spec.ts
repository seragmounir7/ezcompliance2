import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShotModuleComponent } from './screen-shot-module.component';

describe('ScreenShotModuleComponent', () => {
	let component: ScreenShotModuleComponent;
	let fixture: ComponentFixture<ScreenShotModuleComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ScreenShotModuleComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ScreenShotModuleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
