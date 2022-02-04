import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHappyClientComponent } from './add-happy-client.component';

describe('AddHappyClientComponent', () => {
	let component: AddHappyClientComponent;
	let fixture: ComponentFixture<AddHappyClientComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddHappyClientComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddHappyClientComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
