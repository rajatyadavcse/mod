import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupformentorComponent } from './signupformentor.component';

describe('SignupformentorComponent', () => {
  let component: SignupformentorComponent;
  let fixture: ComponentFixture<SignupformentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupformentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupformentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
