import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenubuhanPaweBaharuComponent } from './penubuhan-pawe-baharu.component';

describe('PenubuhanPaweBaharuComponent', () => {
  let component: PenubuhanPaweBaharuComponent;
  let fixture: ComponentFixture<PenubuhanPaweBaharuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenubuhanPaweBaharuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenubuhanPaweBaharuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
