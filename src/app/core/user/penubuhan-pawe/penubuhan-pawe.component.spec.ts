import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenubuhanPaweComponent } from './penubuhan-pawe.component';

describe('PenubuhanPaweComponent', () => {
  let component: PenubuhanPaweComponent;
  let fixture: ComponentFixture<PenubuhanPaweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenubuhanPaweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenubuhanPaweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
