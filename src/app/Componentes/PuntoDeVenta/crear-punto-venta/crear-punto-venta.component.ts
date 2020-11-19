import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-crear-punto-venta',
  templateUrl: './crear-punto-venta.component.html',
  styleUrls: ['./crear-punto-venta.component.css']
})
export class CrearPuntoVentaComponent implements OnInit {

  puntos_de_ventas: any = [];
  municipios: any = [];

  CrearAPuntoVenta: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

  ngOnInit() {
    this.getmuni();
    this.CrearAPuntoVenta = this.formBuilder.group(
      {
        nuevoNomP: [],
        nuevaDirP: [],
        nuevoMunP: []
      });
  }

  public CrearPuntoVenta() {

    var nuevoNomP = this.CrearAPuntoVenta.getRawValue()['nuevoNomP'];
    var nuevaDirP = this.CrearAPuntoVenta.getRawValue()['nuevaDirP'];
    var nuevoMunP = this.CrearAPuntoVenta.getRawValue()['nuevoMunP'];



    var cadena = { 
      "nombre_punto_de_venta": nuevoNomP, "direccion_punto_de_venta": nuevaDirP, "id_municipio": nuevoMunP
    };

    this.servi.CrearPuntoVenta(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) });
  }

  getmuni() {
    this.servi.getMunicipios().subscribe((data: { muncipio: [] }) => { this.municipios = data; }, error => { console.error(error + " ") });
    console.log();
  }

}
