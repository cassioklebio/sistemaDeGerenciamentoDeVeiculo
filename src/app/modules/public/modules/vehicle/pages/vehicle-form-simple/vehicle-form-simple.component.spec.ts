import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormSimpleComponent } from './vehicle-form-simple.component';

describe('VehicleFormSimpleComponent', () => {
  let component: VehicleFormSimpleComponent;
  let fixture: ComponentFixture<VehicleFormSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleFormSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFormSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
