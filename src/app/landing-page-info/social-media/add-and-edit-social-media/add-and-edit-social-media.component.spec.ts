import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndEditSocialMediaComponent } from './add-and-edit-social-media.component';

describe('AddAndEditSocialMediaComponent', () => {
  let component: AddAndEditSocialMediaComponent;
  let fixture: ComponentFixture<AddAndEditSocialMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAndEditSocialMediaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAndEditSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
