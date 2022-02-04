import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuridictionComponent } from './juridiction.component';

describe('JuridictionComponent', () => {
	let component: JuridictionComponent;
	let fixture: ComponentFixture<JuridictionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [JuridictionComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(JuridictionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
