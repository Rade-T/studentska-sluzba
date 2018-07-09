import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPredavanjeComponent } from './add-predavanje.component';

describe('AddPredavanjeComponent', () => {
  let component: AddPredavanjeComponent;
  let fixture: ComponentFixture<AddPredavanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPredavanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPredavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
