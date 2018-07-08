import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPolaganjeComponent } from './add-polaganje.component';

describe('AddPolaganjeComponent', () => {
  let component: AddPolaganjeComponent;
  let fixture: ComponentFixture<AddPolaganjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPolaganjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPolaganjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
