import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpoPage } from './spo.page';

describe('SpoPage', () => {
  let component: SpoPage;
  let fixture: ComponentFixture<SpoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SpoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
