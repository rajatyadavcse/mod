import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentoreditskillsComponent } from './mentoreditskills.component';

describe('MentoreditskillsComponent', () => {
  let component: MentoreditskillsComponent;
  let fixture: ComponentFixture<MentoreditskillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentoreditskillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentoreditskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
