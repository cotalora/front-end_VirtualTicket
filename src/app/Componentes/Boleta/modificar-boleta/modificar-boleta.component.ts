import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-modificar-boleta',
  templateUrl: './modificar-boleta.component.html',
  styleUrls: ['./modificar-boleta.component.css']
})
export class ModificarBoletaComponent implements OnInit {

  boletas: any = [];
  eventos: any = [];
  personas: any = [];
  puntos_de_venta: any = [];

  ActualizarABoletas: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const boletas_id = this.route.snapshot.params["id"];
    this.getdetalles(boletas_id);
    this.getevento();
    this.getpersona();
    this.getpuntoventa();

    this.ActualizarABoletas = this.formBuilder.group(
      {
        precio: [],
        asiento: [],
        evento: [],
        cliente: [],
        punven: []
      });
  }

  public getdetalles(id: string) {
    this.servi.getBoleta('/' + id).subscribe((data: {}) => { this.boletas = data; }, error => { console.log(error) });
  }
  getevento() {
    this.servi.getEventoo().subscribe((data: { evento: [] }) => { this.eventos = data; }, error => { console.error(error + " ") });
    console.log();
  }
  getpersona() {
    this.servi.getCliente().subscribe((data: { cliente: [] }) => { this.personas = data; }, error => { console.error(error + " ") });
    console.log();
  }
  getpuntoventa() {
    this.servi.getPunto().subscribe((data: { punto_de_venta: [] }) => { this.puntos_de_venta = data; }, error => { console.error(error + " ") });
    console.log();
  }

  public ActualizarBoleta() {

    var precio = this.ActualizarABoletas.getRawValue()['precio'];
    var asiento = this.ActualizarABoletas.getRawValue()['asiento'];
    var evento = this.ActualizarABoletas.getRawValue()['evento'];
    var cliente = this.ActualizarABoletas.getRawValue()['cliente'];
    var punven = this.ActualizarABoletas.getRawValue()['punven'];

    var cadena = {
      "id_boleta": this.route.snapshot.params["id"], "precio_boleta": precio, "numero_asiento_bolesta": asiento, "id_evento": evento, "id_persona": cliente,
      "id_punto_de_venta": punven
    };
    console.log(this.servi.updateBoleta(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) }));

    this.servi.updateBoleta(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) });
  }

}
