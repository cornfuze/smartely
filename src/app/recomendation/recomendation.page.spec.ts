import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecomendationPage } from './recomendation.page';

describe('RecomendationPage', () => {
  let component: RecomendationPage;
  let fixture: ComponentFixture<RecomendationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
