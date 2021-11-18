import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOfPractComponent } from './code-of-pract.component';

describe('CodeOfPractComponent', () => {
  let component: CodeOfPractComponent;
  let fixture: ComponentFixture<CodeOfPractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeOfPractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOfPractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
