import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { K4kComponent } from './k4k.component';

describe('K4kComponent', () => {
  let component: K4kComponent;
  let fixture: ComponentFixture<K4kComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ K4kComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(K4kComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
