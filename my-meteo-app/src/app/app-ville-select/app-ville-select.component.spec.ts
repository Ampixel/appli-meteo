import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppVilleSelectComponent } from './app-ville-select.component';

describe('AppVilleSelectComponent', () => {
  let component: AppVilleSelectComponent;
  let fixture: ComponentFixture<AppVilleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppVilleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppVilleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
