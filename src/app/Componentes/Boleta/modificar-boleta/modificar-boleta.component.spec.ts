import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarBoletaComponent } from './modificar-boleta.component';

describe('ModificarBoletaComponent', () => {
  let component: ModificarBoletaComponent;
  let fixture: ComponentFixture<ModificarBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
