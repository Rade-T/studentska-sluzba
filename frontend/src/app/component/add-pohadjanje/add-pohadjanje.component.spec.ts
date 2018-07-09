import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPohadjanjeComponent } from './add-pohadjanje.component';

describe('AddPohadjanjeComponent', () => {
  let component: AddPohadjanjeComponent;
  let fixture: ComponentFixture<AddPohadjanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPohadjanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPohadjanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
