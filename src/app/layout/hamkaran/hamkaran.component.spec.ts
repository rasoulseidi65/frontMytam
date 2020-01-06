import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamkaranComponent } from './hamkaran.component';

describe('HamkaranComponent', () => {
  let component: HamkaranComponent;
  let fixture: ComponentFixture<HamkaranComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamkaranComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamkaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
