import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUcenikComponent } from './edit-ucenik.component';

describe('EditUcenikComponent', () => {
  let component: EditUcenikComponent;
  let fixture: ComponentFixture<EditUcenikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUcenikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUcenikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
