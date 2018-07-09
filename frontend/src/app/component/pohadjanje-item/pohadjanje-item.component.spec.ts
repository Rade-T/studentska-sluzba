import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PohadjanjeItemComponent } from './pohadjanje-item.component';

describe('PohadjanjeItemComponent', () => {
  let component: PohadjanjeItemComponent;
  let fixture: ComponentFixture<PohadjanjeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PohadjanjeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PohadjanjeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
