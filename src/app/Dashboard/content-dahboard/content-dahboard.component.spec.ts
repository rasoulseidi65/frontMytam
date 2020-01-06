import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDahboardComponent } from './content-dahboard.component';

describe('ContentDahboardComponent', () => {
  let component: ContentDahboardComponent;
  let fixture: ComponentFixture<ContentDahboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDahboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDahboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
