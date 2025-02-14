import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifestylePage } from './lifestyle.page';

describe('LifestylePage', () => {
  let component: LifestylePage;
  let fixture: ComponentFixture<LifestylePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LifestylePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
