import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemohonanAwamComponent } from './pemohonan-awam.component';

describe('PemohonanAwamComponent', () => {
  let component: PemohonanAwamComponent;
  let fixture: ComponentFixture<PemohonanAwamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemohonanAwamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemohonanAwamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
