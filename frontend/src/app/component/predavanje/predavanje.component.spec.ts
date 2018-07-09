import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavanjeComponent } from './predavanje.component';

describe('PredavanjeComponent', () => {
  let component: PredavanjeComponent;
  let fixture: ComponentFixture<PredavanjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavanjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
