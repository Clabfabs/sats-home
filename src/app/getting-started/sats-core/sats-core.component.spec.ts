import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SatsCoreGettingStartedComponent} from "./sats-core.component";

describe('SatsCoreGettingStartedComponent', () => {
  let component: SatsCoreGettingStartedComponent;
  let fixture: ComponentFixture<SatsCoreGettingStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SatsCoreGettingStartedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsCoreGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
