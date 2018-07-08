import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolaganjeItemComponent } from './polaganje-item.component';

describe('PolaganjeItemComponent', () => {
  let component: PolaganjeItemComponent;
  let fixture: ComponentFixture<PolaganjeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolaganjeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolaganjeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
