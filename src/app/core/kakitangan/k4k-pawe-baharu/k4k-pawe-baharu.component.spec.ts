import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K4kPaweBaharuComponent } from './k4k-pawe-baharu.component';

describe('K4kPaweBaharuComponent', () => {
  let component: K4kPaweBaharuComponent;
  let fixture: ComponentFixture<K4kPaweBaharuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K4kPaweBaharuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K4kPaweBaharuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
