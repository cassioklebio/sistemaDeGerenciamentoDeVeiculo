import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFormCompletComponent } from './vehicle-form-complet.component';

describe('VehicleFormCompletComponent', () => {
  let component: VehicleFormCompletComponent;
  let fixture: ComponentFixture<VehicleFormCompletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleFormCompletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleFormCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
