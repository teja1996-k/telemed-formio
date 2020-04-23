import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelehealthserviceComponent } from './telehealthservice.component';

describe('TelehealthserviceComponent', () => {
  let component: TelehealthserviceComponent;
  let fixture: ComponentFixture<TelehealthserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelehealthserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelehealthserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
