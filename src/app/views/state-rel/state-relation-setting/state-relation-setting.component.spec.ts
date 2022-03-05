import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRelationSettingComponent } from './state-relation-setting.component';

describe('StateRelationSettingComponent', () => {
	let component: StateRelationSettingComponent;
	let fixture: ComponentFixture<StateRelationSettingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [StateRelationSettingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StateRelationSettingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
