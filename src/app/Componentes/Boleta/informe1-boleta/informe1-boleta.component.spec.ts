import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe1BoletaComponent } from './informe1-boleta.component';

describe('Informe1BoletaComponent', () => {
  let component: Informe1BoletaComponent;
  let fixture: ComponentFixture<Informe1BoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Informe1BoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Informe1BoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
