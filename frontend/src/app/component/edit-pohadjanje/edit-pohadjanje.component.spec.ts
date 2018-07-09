import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPohadjanjeComponent } from './edit-pohadjanje.component';

describe('EditPohadjanjeComponent', () => {
  let component: EditPohadjanjeComponent;
  let fixture: ComponentFixture<EditPohadjanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPohadjanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPohadjanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
