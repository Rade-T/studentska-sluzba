import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPredavanjeComponent } from './edit-predavanje.component';

describe('EditPredavanjeComponent', () => {
  let component: EditPredavanjeComponent;
  let fixture: ComponentFixture<EditPredavanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPredavanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPredavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
