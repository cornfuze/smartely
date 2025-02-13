import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SleepqualityPage } from './sleepquality.page';

describe('SleepqualityPage', () => {
  let component: SleepqualityPage;
  let fixture: ComponentFixture<SleepqualityPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SleepqualityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
