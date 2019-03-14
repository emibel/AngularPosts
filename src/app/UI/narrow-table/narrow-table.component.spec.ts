import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarrowTableComponent } from './narrow-table.component';

describe('NarrowTableComponent', () => {
  let component: NarrowTableComponent;
  let fixture: ComponentFixture<NarrowTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarrowTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarrowTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
