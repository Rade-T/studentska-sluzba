import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PohadjanjaComponent } from './pohadjanja.component';

describe('PohadjanjaComponent', () => {
  let component: PohadjanjaComponent;
  let fixture: ComponentFixture<PohadjanjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PohadjanjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PohadjanjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
