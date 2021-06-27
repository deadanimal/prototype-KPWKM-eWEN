import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwePemohonanComponent } from './iwe-pemohonan.component';

describe('IwePemohonanComponent', () => {
  let component: IwePemohonanComponent;
  let fixture: ComponentFixture<IwePemohonanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwePemohonanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwePemohonanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
