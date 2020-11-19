import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPuntoVentaComponent } from './modificar-punto-venta.component';

describe('ModificarPuntoVentaComponent', () => {
  let component: ModificarPuntoVentaComponent;
  let fixture: ComponentFixture<ModificarPuntoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPuntoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
