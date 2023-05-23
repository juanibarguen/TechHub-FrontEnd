import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarComponenteComponent } from './actualizar-componente.component';

describe('ActualizarComponenteComponent', () => {
  let component: ActualizarComponenteComponent;
  let fixture: ComponentFixture<ActualizarComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarComponenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
