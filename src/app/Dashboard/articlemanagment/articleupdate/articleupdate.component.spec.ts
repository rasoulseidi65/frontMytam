import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleupdateComponent } from './articleupdate.component';

describe('ArticleupdateComponent', () => {
  let component: ArticleupdateComponent;
  let fixture: ComponentFixture<ArticleupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
