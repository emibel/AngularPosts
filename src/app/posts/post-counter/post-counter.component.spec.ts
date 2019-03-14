import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCounterComponent } from './post-counter.component';

describe('PostCounterComponent', () => {
  let component: PostCounterComponent;
  let fixture: ComponentFixture<PostCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
