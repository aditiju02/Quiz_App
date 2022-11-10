import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninmodalComponent } from './signinmodal.component';

describe('SigninmodalComponent', () => {
  let component: SigninmodalComponent;
  let fixture: ComponentFixture<SigninmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninmodalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
