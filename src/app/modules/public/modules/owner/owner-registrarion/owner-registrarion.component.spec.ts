import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerRegistrarionComponent } from './owner-registrarion.component';

describe('OwnerRegistrarionComponent', () => {
  let component: OwnerRegistrarionComponent;
  let fixture: ComponentFixture<OwnerRegistrarionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerRegistrarionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerRegistrarionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
