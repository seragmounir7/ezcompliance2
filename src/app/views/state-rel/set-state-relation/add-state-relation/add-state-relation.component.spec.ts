import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStateRelationComponent } from './add-state-relation.component';

describe('AddStateRelationComponent', () => {
	let component: AddStateRelationComponent;
	let fixture: ComponentFixture<AddStateRelationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AddStateRelationComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AddStateRelationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
