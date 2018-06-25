import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNastavnikComponent } from './edit-nastavnik.component';

describe('EditNastavnikComponent', () => {
  let component: EditNastavnikComponent;
  let fixture: ComponentFixture<EditNastavnikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNastavnikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNastavnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
