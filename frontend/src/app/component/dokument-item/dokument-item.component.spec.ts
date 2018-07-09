import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentItemComponent } from './dokument-item.component';

describe('DokumentItemComponent', () => {
  let component: DokumentItemComponent;
  let fixture: ComponentFixture<DokumentItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DokumentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
