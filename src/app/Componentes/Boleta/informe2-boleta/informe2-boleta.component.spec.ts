import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Informe2BoletaComponent } from './informe2-boleta.component';

describe('Informe2BoletaComponent', () => {
  let component: Informe2BoletaComponent;
  let fixture: ComponentFixture<Informe2BoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Informe2BoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Informe2BoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
