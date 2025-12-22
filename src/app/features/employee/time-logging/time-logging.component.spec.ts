import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeLoggingComponent } from './time-logging.component';

describe('TimeLoggingComponent', () => {
  let component: TimeLoggingComponent;
  let fixture: ComponentFixture<TimeLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeLoggingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
