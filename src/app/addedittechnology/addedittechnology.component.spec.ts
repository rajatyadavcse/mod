import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedittechnologyComponent } from './addedittechnology.component';

describe('AddedittechnologyComponent', () => {
  let component: AddedittechnologyComponent;
  let fixture: ComponentFixture<AddedittechnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddedittechnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddedittechnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
