import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaganjeComponent } from './polaganje.component';

describe('PolaganjeComponent', () => {
  let component: PolaganjeComponent;
  let fixture: ComponentFixture<PolaganjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolaganjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolaganjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
