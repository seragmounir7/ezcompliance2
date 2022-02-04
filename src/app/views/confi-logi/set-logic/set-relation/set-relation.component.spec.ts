import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetRelationComponent } from './set-relation.component';

describe('SetRelationComponent', () => {
	let component: SetRelationComponent;
	let fixture: ComponentFixture<SetRelationComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [SetRelationComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SetRelationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
