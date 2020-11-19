import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-modificar-evento',
  templateUrl: './modificar-evento.component.html',
  styleUrls: ['./modificar-evento.component.css']
})
export class ModificarEventoComponent implements OnInit {

  eventos: any = [];
  municipios: any = [];
  tipoeventos: any = [];

  ActualizarAEvento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    const evento_id = this.route.snapshot.params["id"];
    this.getdetalles(evento_id);
    this.getmuni();
    this.getTipEven();

    this.ActualizarAEvento = this.formBuilder.group(
      {
        nuevoNomE: [],
        nuevaDesE: [],
        nuevaDirE: [],
        nuevoAfoE: [],
        nuevoFhI: [],
        nuevoFhF: [],
        nuevoImg: [],
        nuevoComb: [],
        nuevoTipE: []
      });
  }

  public getdetalles(id: string) {

    this.servi.getEvento('/' + id).subscribe((data: {}) => { this.eventos = data; }, error => { console.log(error) });
  }

  getmuni() {
    this.servi.getMunicipios().subscribe((data: { muncipio: [] }) => { this.municipios = data; }, error => { console.error(error + " ") });
    console.log();
  }
  getTipEven() {
    this.servi.getTipoEventos().subscribe((data: { tipoevento: [] }) => { this.tipoeventos = data; }, error => { console.error(error + " ") });
    console.log();
  }



  public ActualizarEventoMod() {

    var nuevoNomE = this.ActualizarAEvento.getRawValue()['nuevoNomE'];
    console.log("  45 " + nuevoNomE);
    var nuevaDesE = this.ActualizarAEvento.getRawValue()['nuevaDesE'];
    //console.log("   la 46 " + nuevoTipDoc);
    var nuevaDirE = this.ActualizarAEvento.getRawValue()['nuevaDirE'];
    //console.log("   la 47 " + nuevoIniTipDoc);
    var nuevoAfoE = this.ActualizarAEvento.getRawValue()['nuevoAfoE'];
    //console.log("   la 47 " + nuevoIniTipDoc);
    var nuevoFhI = this.ActualizarAEvento.getRawValue()['nuevoFhI'];
    var nuevoFhF = this.ActualizarAEvento.getRawValue()['nuevoFhF'];
    var nuevoImg = this.ActualizarAEvento.getRawValue()['nuevoImg'];
    var nuevoComb = this.ActualizarAEvento.getRawValue()['nuevoComb'];
    var nuevoTipE = this.ActualizarAEvento.getRawValue()['nuevoTipE'];




    var cadena = {
      "id_evento": this.route.snapshot.params["id"], "nombre_evento": nuevoNomE, "descripcion_evento": nuevaDesE, "direccion_evento": nuevaDirE, "aforo_evento": nuevoAfoE, "fecha_hora_inicio_evento": nuevoFhI,
      "fecha_hora_fin_evento": nuevoFhF, "imagenes": nuevoImg, "id_municipio": nuevoComb, "id_tipo_evento": nuevoTipE
    };

    console.log(this.servi.updateEvento(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) }));
    this.servi.updateEvento(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) })
  }
}
