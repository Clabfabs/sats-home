import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SatsWebGettingStartedComponent} from "./sats-web.component";

describe('SatsWebGettingStartedComponent', () => {
  let component: SatsWebGettingStartedComponent;
  let fixture: ComponentFixture<SatsWebGettingStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SatsWebGettingStartedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsWebGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
