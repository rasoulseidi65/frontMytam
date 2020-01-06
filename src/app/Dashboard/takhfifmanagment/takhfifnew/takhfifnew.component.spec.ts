import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakhfifnewComponent } from './takhfifnew.component';

describe('TakhfifnewComponent', () => {
  let component: TakhfifnewComponent;
  let fixture: ComponentFixture<TakhfifnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakhfifnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakhfifnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
