import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsYouComponent } from './methods-you.component';

describe('MethodsYouComponent', () => {
  let component: MethodsYouComponent;
  let fixture: ComponentFixture<MethodsYouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodsYouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
