import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadBulkDataComponent } from './upload-bulk-data.component';

describe('UploadBulkDataComponent', () => {
  let component: UploadBulkDataComponent;
  let fixture: ComponentFixture<UploadBulkDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadBulkDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBulkDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
