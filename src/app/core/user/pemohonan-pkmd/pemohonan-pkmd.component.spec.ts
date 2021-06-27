import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemohonanPkmdComponent } from './pemohonan-pkmd.component';

describe('PemohonanPkmdComponent', () => {
  let component: PemohonanPkmdComponent;
  let fixture: ComponentFixture<PemohonanPkmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemohonanPkmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemohonanPkmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
