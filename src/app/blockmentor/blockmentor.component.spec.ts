import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockmentorComponent } from './blockmentor.component';

describe('BlockmentorComponent', () => {
  let component: BlockmentorComponent;
  let fixture: ComponentFixture<BlockmentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockmentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
