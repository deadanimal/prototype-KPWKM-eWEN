import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilingKesihatanPersekitaranComponent } from './profiling-kesihatan-persekitaran.component';

describe('ProfilingKesihatanPersekitaranComponent', () => {
  let component: ProfilingKesihatanPersekitaranComponent;
  let fixture: ComponentFixture<ProfilingKesihatanPersekitaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilingKesihatanPersekitaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilingKesihatanPersekitaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
