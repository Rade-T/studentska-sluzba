import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUplataComponent } from './add-uplata.component';

describe('AddUplataComponent', () => {
  let component: AddUplataComponent;
  let fixture: ComponentFixture<AddUplataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUplataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
