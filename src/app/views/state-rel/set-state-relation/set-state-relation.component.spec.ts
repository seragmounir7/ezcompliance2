import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetStateRelationComponent } from './set-state-relation.component';

describe('SetStateRelationComponent', () => {
	let component: SetStateRelationComponent;
	let fixture: ComponentFixture<SetStateRelationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SetStateRelationComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SetStateRelationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
