import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingLinkComponent } from './marketing-link.component';

describe('MarketingLinkComponent', () => {
  let component: MarketingLinkComponent;
  let fixture: ComponentFixture<MarketingLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketingLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
