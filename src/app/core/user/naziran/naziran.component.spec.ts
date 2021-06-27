import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaziranComponent } from './naziran.component';

describe('NaziranComponent', () => {
  let component: NaziranComponent;
  let fixture: ComponentFixture<NaziranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaziranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaziranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
