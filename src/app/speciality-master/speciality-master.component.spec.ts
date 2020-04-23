import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityMasterComponent } from './speciality-master.component';

describe('SpecialityMasterComponent', () => {
  let component: SpecialityMasterComponent;
  let fixture: ComponentFixture<SpecialityMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
