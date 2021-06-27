import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KemasukanComponent } from './kemasukan.component';

describe('KemasukanComponent', () => {
  let component: KemasukanComponent;
  let fixture: ComponentFixture<KemasukanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KemasukanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KemasukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
