import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialbrandsComponent } from './specialbrands.component';

describe('SpecialbrandsComponent', () => {
  let component: SpecialbrandsComponent;
  let fixture: ComponentFixture<SpecialbrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialbrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialbrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
