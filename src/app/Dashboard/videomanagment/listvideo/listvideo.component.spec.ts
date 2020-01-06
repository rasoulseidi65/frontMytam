import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvideoComponent } from './listvideo.component';

describe('ListvideoComponent', () => {
  let component: ListvideoComponent;
  let fixture: ComponentFixture<ListvideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListvideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
