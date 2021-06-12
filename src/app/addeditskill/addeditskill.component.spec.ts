import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditskillComponent } from './addeditskill.component';

describe('AddeditskillComponent', () => {
  let component: AddeditskillComponent;
  let fixture: ComponentFixture<AddeditskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
