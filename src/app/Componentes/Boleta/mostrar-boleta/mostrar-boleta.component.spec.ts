import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarBoletaComponent } from './mostrar-boleta.component';

describe('MostrarBoletaComponent', () => {
  let component: MostrarBoletaComponent;
  let fixture: ComponentFixture<MostrarBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
