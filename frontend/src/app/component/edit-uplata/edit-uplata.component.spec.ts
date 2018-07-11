import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUplataComponent } from './edit-uplata.component';

describe('EditUplataComponent', () => {
  let component: EditUplataComponent;
  let fixture: ComponentFixture<EditUplataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUplataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUplataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
