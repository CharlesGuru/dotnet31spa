import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditWeatherComponent } from './add-edit-weather.component';

describe('AddEditWeatherComponent', () => {
  let component: AddEditWeatherComponent;
  let fixture: ComponentFixture<AddEditWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
