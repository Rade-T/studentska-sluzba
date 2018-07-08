import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPolaganjeComponent } from './edit-polaganje.component';

describe('EditPolaganjeComponent', () => {
  let component: EditPolaganjeComponent;
  let fixture: ComponentFixture<EditPolaganjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPolaganjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPolaganjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
