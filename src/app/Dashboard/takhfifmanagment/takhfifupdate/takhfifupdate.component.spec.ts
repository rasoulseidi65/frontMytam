import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakhfifupdateComponent } from './takhfifupdate.component';

describe('TakhfifupdateComponent', () => {
  let component: TakhfifupdateComponent;
  let fixture: ComponentFixture<TakhfifupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakhfifupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakhfifupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
