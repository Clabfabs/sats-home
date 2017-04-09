import {async, ComponentFixture, TestBed} from "@angular/core/testing";

import {SatsCliGettingStartedComponent} from "./sats-cli.component";

describe('SatsCliGettingStartedComponent', () => {
  let component: SatsCliGettingStartedComponent;
  let fixture: ComponentFixture<SatsCliGettingStartedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SatsCliGettingStartedComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsCliGettingStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
