import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildlingListComponent } from './buildling-list.component';

describe('BuildlingListComponent', () => {
  let component: BuildlingListComponent;
  let fixture: ComponentFixture<BuildlingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildlingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildlingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
