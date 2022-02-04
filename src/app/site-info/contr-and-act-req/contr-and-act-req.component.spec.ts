import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrAndActReqComponent } from './contr-and-act-req.component';

describe('ContrAndActReqComponent', () => {
	let component: ContrAndActReqComponent;
	let fixture: ComponentFixture<ContrAndActReqComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [ContrAndActReqComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ContrAndActReqComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
