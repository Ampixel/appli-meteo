import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAppHeaderMeteoComponent } from './my-app-header-meteo.component';

describe('MyAppHeaderMeteoComponent', () => {
  let component: MyAppHeaderMeteoComponent;
  let fixture: ComponentFixture<MyAppHeaderMeteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAppHeaderMeteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAppHeaderMeteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
