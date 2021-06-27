import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendaftaranAhliPaweComponent } from './pendaftaran-ahli-pawe.component';

describe('PendaftaranAhliPaweComponent', () => {
  let component: PendaftaranAhliPaweComponent;
  let fixture: ComponentFixture<PendaftaranAhliPaweComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendaftaranAhliPaweComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendaftaranAhliPaweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
