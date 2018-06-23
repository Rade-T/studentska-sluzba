import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPredmetComponent } from './add-predmet.component';

describe('AddPredmetComponent', () => {
  let component: AddPredmetComponent;
  let fixture: ComponentFixture<AddPredmetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPredmetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPredmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
