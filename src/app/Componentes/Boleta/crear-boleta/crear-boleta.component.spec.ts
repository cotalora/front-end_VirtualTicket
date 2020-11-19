import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearBoletaComponent } from './crear-boleta.component';

describe('CrearBoletaComponent', () => {
  let component: CrearBoletaComponent;
  let fixture: ComponentFixture<CrearBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
