import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredavanjeItemComponent } from './predavanje-item.component';

describe('PredavanjeItemComponent', () => {
  let component: PredavanjeItemComponent;
  let fixture: ComponentFixture<PredavanjeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredavanjeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredavanjeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
