import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercompletedtrainingsComponent } from './usercompletedtrainings.component';

describe('UsercompletedtrainingsComponent', () => {
  let component: UsercompletedtrainingsComponent;
  let fixture: ComponentFixture<UsercompletedtrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercompletedtrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercompletedtrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
