import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SatsCliUsageComponent} from "./sats-cli.component";

describe('SatsCliGettingStartedComponent', () => {
  let component: SatsCliUsageComponent;
  let fixture: ComponentFixture<SatsCliUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SatsCliUsageComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsCliUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
