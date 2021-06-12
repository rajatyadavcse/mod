import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercurrenttrainingsComponent } from './usercurrenttrainings.component';

describe('UsercurrenttrainingsComponent', () => {
  let component: UsercurrenttrainingsComponent;
  let fixture: ComponentFixture<UsercurrenttrainingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsercurrenttrainingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsercurrenttrainingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
