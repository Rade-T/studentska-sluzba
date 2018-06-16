import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNastavnikComponent } from './add-nastavnik.component';

describe('AddNastavnikComponent', () => {
  let component: AddNastavnikComponent;
  let fixture: ComponentFixture<AddNastavnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNastavnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
