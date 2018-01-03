import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthHolidaysComponent } from './month-holidays.component';

describe('MonthHolidaysComponent', () => {
  let component: MonthHolidaysComponent;
  let fixture: ComponentFixture<MonthHolidaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthHolidaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthHolidaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
