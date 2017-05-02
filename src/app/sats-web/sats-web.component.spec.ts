import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SatsWebComponent} from './sats-web.component';

describe('SatsWebComponent', () => {
  let component: SatsWebComponent;
  let fixture: ComponentFixture<SatsWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SatsWebComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatsWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
