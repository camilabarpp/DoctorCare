import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeToDoctorCareComponent } from './welcome-to-doctor-care.component';

describe('WelcomeToDoctorCareComponent', () => {
  let component: WelcomeToDoctorCareComponent;
  let fixture: ComponentFixture<WelcomeToDoctorCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeToDoctorCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomeToDoctorCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
