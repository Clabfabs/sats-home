import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SatsWebUsageComponent} from "./sats-web.component";

describe('SatsWebGettingStartedComponent', () => {
  let component: SatsWebUsageComponent;
  let fixture: ComponentFixture<SatsWebUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SatsWebUsageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsWebUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
