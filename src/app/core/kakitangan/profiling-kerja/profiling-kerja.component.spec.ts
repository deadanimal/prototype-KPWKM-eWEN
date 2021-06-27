import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingKerjaComponent } from './profiling-kerja.component';

describe('ProfilingKerjaComponent', () => {
  let component: ProfilingKerjaComponent;
  let fixture: ComponentFixture<ProfilingKerjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilingKerjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilingKerjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
