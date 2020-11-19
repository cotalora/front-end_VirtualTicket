import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarBoletasComponent } from './listar-boletas.component';

describe('ListarBoletasComponent', () => {
  let component: ListarBoletasComponent;
  let fixture: ComponentFixture<ListarBoletasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarBoletasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarBoletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
