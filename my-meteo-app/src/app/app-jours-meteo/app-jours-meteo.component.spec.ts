import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJoursMeteoComponent } from './app-jours-meteo.component';

describe('AppJoursMeteoComponent', () => {
  let component: AppJoursMeteoComponent;
  let fixture: ComponentFixture<AppJoursMeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppJoursMeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppJoursMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});