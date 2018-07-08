import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPredmetComponent } from './edit-predmet.component';

describe('EditPredmetComponent', () => {
  let component: EditPredmetComponent;
  let fixture: ComponentFixture<EditPredmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPredmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
