import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepAnalysisPage } from './step-analysis.page';

describe('StepAnalysisPage', () => {
  let component: StepAnalysisPage;
  let fixture: ComponentFixture<StepAnalysisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StepAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
