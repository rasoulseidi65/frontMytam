import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLearnComponent } from './more-learn.component';

describe('MoreLearnComponent', () => {
  let component: MoreLearnComponent;
  let fixture: ComponentFixture<MoreLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
