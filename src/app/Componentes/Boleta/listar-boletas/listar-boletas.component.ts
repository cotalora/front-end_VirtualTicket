import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';

@Component({
  selector: 'app-listar-boletas',
  templateUrl: './listar-boletas.component.html',
  styleUrls: ['./listar-boletas.component.css']
})
export class ListarBoletasComponent implements OnInit {

  boletas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

  ngOnInit() {
    this.servi.getBoletas().subscribe((data: { boleta: [] }) => { this.boletas = data; }, error => { console.error(error + " ") });
  }

}
