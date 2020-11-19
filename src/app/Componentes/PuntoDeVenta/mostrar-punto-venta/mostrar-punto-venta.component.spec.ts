import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPuntoVentaComponent } from './mostrar-punto-venta.component';

describe('MostrarPuntoVentaComponent', () => {
  let component: MostrarPuntoVentaComponent;
  let fixture: ComponentFixture<MostrarPuntoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarPuntoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
