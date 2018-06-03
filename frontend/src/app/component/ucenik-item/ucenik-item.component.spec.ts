import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcenikItemComponent } from './ucenik-item.component';

describe('UcenikItemComponent', () => {
  let component: UcenikItemComponent;
  let fixture: ComponentFixture<UcenikItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcenikItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcenikItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
