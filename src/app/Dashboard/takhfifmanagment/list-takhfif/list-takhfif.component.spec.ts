import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTakhfifComponent } from './list-takhfif.component';

describe('ListTakhfifComponent', () => {
  let component: ListTakhfifComponent;
  let fixture: ComponentFixture<ListTakhfifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTakhfifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTakhfifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
