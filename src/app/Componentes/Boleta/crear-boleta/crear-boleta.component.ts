import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-crear-boleta',
  templateUrl: './crear-boleta.component.html',
  styleUrls: ['./crear-boleta.component.css']
})
export class CrearBoletaComponent implements OnInit {

  eventos: any = [];
  personas: any = [];
  puntos_de_venta: any = [];

  CrearABoleta: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getevento();
    this.getpersona();
    this.getpuntoventa();
    this.CrearABoleta = this.formBuilder.group(
      {
        precio: [],
        asiento: [],
        evento: [],
        cliente: [],
        punven: []
      });
  }
  public CrearBoleta() {

    var precio = this.CrearABoleta.getRawValue()['precio'];
    var asiento = this.CrearABoleta.getRawValue()['asiento'];
    var evento = this.CrearABoleta.getRawValue()['evento'];
    var cliente = this.CrearABoleta.getRawValue()['cliente'];
    var punven = this.CrearABoleta.getRawValue()['punven'];



    var cadena = {
      "id_boleta": this.route.snapshot.params["id"], "precio_boleta": precio, "numero_asiento_bolesta": asiento, "id_evento": evento, "id_persona": cliente,
      "id_punto_de_venta": punven
    };

    this.servi.CrearBoleta(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) });
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


}
