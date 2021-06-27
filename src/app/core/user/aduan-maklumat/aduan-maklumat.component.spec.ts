import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanMaklumatComponent } from './aduan-maklumat.component';

describe('AduanMaklumatComponent', () => {
  let component: AduanMaklumatComponent;
  let fixture: ComponentFixture<AduanMaklumatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanMaklumatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AduanMaklumatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
