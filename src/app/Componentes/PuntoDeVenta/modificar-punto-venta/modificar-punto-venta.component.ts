import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-modificar-punto-venta',
  templateUrl: './modificar-punto-venta.component.html',
  styleUrls: ['./modificar-punto-venta.component.css']
})
export class ModificarPuntoVentaComponent implements OnInit {

  puntos_de_ventas: any = [];
  municipios: any = [];

  ActualizarAPuntoVenta: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const puntoventa_id = this.route.snapshot.params["id"];
    this.getdetalles(puntoventa_id);
    this.getmuni();

    this.ActualizarAPuntoVenta = this.formBuilder.group(
      {
        nuevoNomP: [],
        nuevaDirP: [],
        nuevoMunP: []
      });
  }

  public getdetalles(id: string) {
    this.servi.getPuntoVenta('/' + id).subscribe((data: {}) => { this.puntos_de_ventas = data; }, error => { console.log(error) });
  }
  getmuni() {
    this.servi.getMunicipios().subscribe((data: { muncipio: [] }) => { this.municipios = data; }, error => { console.error(error + " ") });
    console.log();
  }

  public ActualizarPuntoVenta() {

    var nuevoNomP = this.ActualizarAPuntoVenta.getRawValue()['nuevoNomP'];
    var nuevaDirP = this.ActualizarAPuntoVenta.getRawValue()['nuevaDirP'];
    var nuevoMunP = this.ActualizarAPuntoVenta.getRawValue()['nuevoMunP'];



    var cadena = {
      "id_punto_de_venta": this.route.snapshot.params["id"], "nombre_punto_de_venta": nuevoNomP, "direccion_punto_de_venta": nuevaDirP, "id_municipio": nuevoMunP
    };

    this.servi.updatePuntoVenta(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) });
  }

  

}
