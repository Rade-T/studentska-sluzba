import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetItemComponent } from './predmet-item.component';

describe('PredmetItemComponent', () => {
  let component: PredmetItemComponent;
  let fixture: ComponentFixture<PredmetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredmetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredmetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
