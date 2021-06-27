import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PemohonanAduanComponent } from './pemohonan-aduan.component';

describe('PemohonanAduanComponent', () => {
  let component: PemohonanAduanComponent;
  let fixture: ComponentFixture<PemohonanAduanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PemohonanAduanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PemohonanAduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
