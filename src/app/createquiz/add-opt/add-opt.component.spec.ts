import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOptComponent } from './add-opt.component';

describe('AddOptComponent', () => {
  let component: AddOptComponent;
  let fixture: ComponentFixture<AddOptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
