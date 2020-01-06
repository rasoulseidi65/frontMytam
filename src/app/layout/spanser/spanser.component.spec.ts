import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanserComponent } from './spanser.component';

describe('SpanserComponent', () => {
  let component: SpanserComponent;
  let fixture: ComponentFixture<SpanserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
