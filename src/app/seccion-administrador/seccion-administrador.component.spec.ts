import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAdministradorComponent } from './seccion-administrador.component';

describe('SeccionAdministradorComponent', () => {
  let component: SeccionAdministradorComponent;
  let fixture: ComponentFixture<SeccionAdministradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAdministradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionAdministradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
