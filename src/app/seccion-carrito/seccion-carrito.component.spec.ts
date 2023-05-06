import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCarritoComponent } from './seccion-carrito.component';

describe('SeccionCarritoComponent', () => {
  let component: SeccionCarritoComponent;
  let fixture: ComponentFixture<SeccionCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
