import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasukanAhliComponent } from './kemasukan-ahli.component';

describe('KemasukanAhliComponent', () => {
  let component: KemasukanAhliComponent;
  let fixture: ComponentFixture<KemasukanAhliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemasukanAhliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemasukanAhliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
