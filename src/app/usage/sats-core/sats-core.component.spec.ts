import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SatsCoreUsageComponent} from "./sats-core.component";

describe('SatsCoreGettingStartedComponent', () => {
  let component: SatsCoreUsageComponent;
  let fixture: ComponentFixture<SatsCoreUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SatsCoreUsageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsCoreUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
