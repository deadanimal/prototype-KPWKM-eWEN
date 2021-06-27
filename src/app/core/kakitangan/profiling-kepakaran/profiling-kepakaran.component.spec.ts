import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingKepakaranComponent } from './profiling-kepakaran.component';

describe('ProfilingKepakaranComponent', () => {
  let component: ProfilingKepakaranComponent;
  let fixture: ComponentFixture<ProfilingKepakaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilingKepakaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilingKepakaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
