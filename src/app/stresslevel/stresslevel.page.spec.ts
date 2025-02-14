import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StresslevelPage } from './stresslevel.page';

describe('StresslevelPage', () => {
  let component: StresslevelPage;
  let fixture: ComponentFixture<StresslevelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StresslevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
