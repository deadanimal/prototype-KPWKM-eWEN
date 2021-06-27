import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IwePemohonanAhliComponent } from './iwe-pemohonan-ahli.component';

describe('IwePemohonanAhliComponent', () => {
  let component: IwePemohonanAhliComponent;
  let fixture: ComponentFixture<IwePemohonanAhliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IwePemohonanAhliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IwePemohonanAhliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
