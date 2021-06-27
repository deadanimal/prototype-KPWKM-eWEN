import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasukanPermohonanComponent } from './kemasukan-permohonan.component';

describe('KemasukanPermohonanComponent', () => {
  let component: KemasukanPermohonanComponent;
  let fixture: ComponentFixture<KemasukanPermohonanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemasukanPermohonanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemasukanPermohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
