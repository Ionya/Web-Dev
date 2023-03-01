import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertProductsComponent } from './alert-products.component';

describe('AlertProductsComponent', () => {
  let component: AlertProductsComponent;
  let fixture: ComponentFixture<AlertProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
