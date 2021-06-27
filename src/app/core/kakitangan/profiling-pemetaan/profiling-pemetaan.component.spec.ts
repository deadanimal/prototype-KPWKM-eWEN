import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingPemetaanComponent } from './profiling-pemetaan.component';

describe('ProfilingPemetaanComponent', () => {
  let component: ProfilingPemetaanComponent;
  let fixture: ComponentFixture<ProfilingPemetaanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilingPemetaanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilingPemetaanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
