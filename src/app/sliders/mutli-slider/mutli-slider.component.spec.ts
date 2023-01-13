import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutliSliderComponent } from './mutli-slider.component';

describe('MutliSliderComponent', () => {
  let component: MutliSliderComponent;
  let fixture: ComponentFixture<MutliSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutliSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MutliSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
