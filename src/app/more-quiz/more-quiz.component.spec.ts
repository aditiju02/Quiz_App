import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreQuizComponent } from './more-quiz.component';

describe('MoreQuizComponent', () => {
  let component: MoreQuizComponent;
  let fixture: ComponentFixture<MoreQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
