import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';

@Component({
  selector: 'app-listar-punto-venta',
  templateUrl: './listar-punto-venta.component.html',
  styleUrls: ['./listar-punto-venta.component.css']
})
export class ListarPuntoVentaComponent implements OnInit {

  puntos_de_ventas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

  ngOnInit() {

    this.servi.getPuntosVenta().subscribe((data: { puntoventa: [] }) => { this.puntos_de_ventas = data; }, error => { console.error(error + " ") });
    console.log();
  }

}
