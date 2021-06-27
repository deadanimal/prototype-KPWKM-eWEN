import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiPemohonanAhliComponent } from './senarai-pemohonan-ahli.component';

describe('SenaraiPemohonanAhliComponent', () => {
  let component: SenaraiPemohonanAhliComponent;
  let fixture: ComponentFixture<SenaraiPemohonanAhliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenaraiPemohonanAhliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenaraiPemohonanAhliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
