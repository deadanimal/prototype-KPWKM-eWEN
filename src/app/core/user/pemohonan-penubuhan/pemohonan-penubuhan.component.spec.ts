import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemohonanPenubuhanComponent } from './pemohonan-penubuhan.component';

describe('PemohonanPenubuhanComponent', () => {
  let component: PemohonanPenubuhanComponent;
  let fixture: ComponentFixture<PemohonanPenubuhanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemohonanPenubuhanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemohonanPenubuhanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
