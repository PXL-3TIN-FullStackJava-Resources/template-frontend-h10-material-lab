import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivDetailDialogComponent } from './civ-detail-dialog.component';

describe('CivDetailDialogComponent', () => {
  let component: CivDetailDialogComponent;
  let fixture: ComponentFixture<CivDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
