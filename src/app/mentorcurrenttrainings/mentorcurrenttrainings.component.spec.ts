import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorcurrenttrainingsComponent } from './mentorcurrenttrainings.component';

describe('MentorcurrenttrainingsComponent', () => {
  let component: MentorcurrenttrainingsComponent;
  let fixture: ComponentFixture<MentorcurrenttrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorcurrenttrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorcurrenttrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
