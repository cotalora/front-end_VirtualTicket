import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPuntoVentaComponent } from './listar-punto-venta.component';

describe('ListarPuntoVentaComponent', () => {
  let component: ListarPuntoVentaComponent;
  let fixture: ComponentFixture<ListarPuntoVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPuntoVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPuntoVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
