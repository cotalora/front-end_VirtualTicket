import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-mostrar-punto-venta',
  templateUrl: './mostrar-punto-venta.component.html',
  styleUrls: ['./mostrar-punto-venta.component.css']
})
export class MostrarPuntoVentaComponent implements OnInit {

  puntos_de_ventas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const puntoventa_id = this.route.snapshot.params["id"];
    this.getdetalles(puntoventa_id);
  }
  getdetalles(id:string) {

    this.servi.getPuntoVenta('/' + id).subscribe((data: {}) => { this.puntos_de_ventas = data; }, error => { console.log(error) });
  }
}
