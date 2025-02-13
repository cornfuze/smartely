import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MondayPage } from './monday.page';

describe('MondayPage', () => {
  let component: MondayPage;
  let fixture: ComponentFixture<MondayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MondayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
