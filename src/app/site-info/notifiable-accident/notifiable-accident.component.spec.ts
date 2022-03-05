import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotifiableAccidentSettingComponent } from './notifiable-accident.component';

describe('NotifiableAccidentComponent', () => {
	let component: NotifiableAccidentSettingComponent;
	let fixture: ComponentFixture<NotifiableAccidentSettingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [NotifiableAccidentSettingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NotifiableAccidentSettingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
