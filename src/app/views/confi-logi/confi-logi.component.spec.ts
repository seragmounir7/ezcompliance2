import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiLogiComponent } from './confi-logi.component';

describe('ConfiLogiComponent', () => {
	let component: ConfiLogiComponent;
	let fixture: ComponentFixture<ConfiLogiComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ConfiLogiComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ConfiLogiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
