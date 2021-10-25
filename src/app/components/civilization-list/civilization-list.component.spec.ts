import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CivilizationListComponent } from './civilization-list.component';

describe('CivilizationListComponent', () => {
  let component: CivilizationListComponent;
  let fixture: ComponentFixture<CivilizationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CivilizationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CivilizationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
