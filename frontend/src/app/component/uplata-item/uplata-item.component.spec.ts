import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UplataItemComponent } from './uplata-item.component';

describe('UplataItemComponent', () => {
  let component: UplataItemComponent;
  let fixture: ComponentFixture<UplataItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UplataItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UplataItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
