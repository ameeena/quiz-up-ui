import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualQuizComponent } from './actual-quiz.component';

describe('ActualQuizComponent', () => {
  let component: ActualQuizComponent;
  let fixture: ComponentFixture<ActualQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActualQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
