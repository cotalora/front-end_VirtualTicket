import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/servicio.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.css']
})
export class CrearEventoComponent implements OnInit {

  municipios: any = [];
  tipoeventos: any = [];

  CrearAEvento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

  ngOnInit() {
    this.getmuni();
    this.getTipEven();
    this.CrearAEvento = this.formBuilder.group(
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
    this.formBuilder.group
  }

  public CrearEven() {

    var nuevoNomE = this.CrearAEvento.getRawValue()['nuevoNomE'];
    console.log("  45 " + nuevoNomE);
    var nuevaDesE = this.CrearAEvento.getRawValue()['nuevaDesE'];
    //console.log("   la 46 " + nuevoTipDoc);
    var nuevaDirE = this.CrearAEvento.getRawValue()['nuevaDirE'];
    //console.log("   la 47 " + nuevoIniTipDoc);
    var nuevoAfoE = this.CrearAEvento.getRawValue()['nuevoAfoE'];
    //console.log("   la 47 " + nuevoIniTipDoc);
    var nuevoFhI = this.CrearAEvento.getRawValue()['nuevoFhI'];
    var nuevoFhF = this.CrearAEvento.getRawValue()['nuevoFhF'];
    var nuevoImg = this.CrearAEvento.getRawValue()['nuevoImg'];
    var nuevoComb = this.CrearAEvento.getRawValue()['nuevoComb'];
    var nuevoTipE = this.CrearAEvento.getRawValue()['nuevoTipE'];
    //console.log("Td", datosvalo2,datosvalo3)

    var cadena = { "nombre_evento": nuevoNomE, "descripcion_evento": nuevaDesE, "direccion_evento": nuevaDirE, "aforo_evento": nuevoAfoE, "fecha_hora_inicio_evento": nuevoFhI,
      "fecha_hora_fin_evento": nuevoFhF, "imagenes": nuevoImg, "id_municipio": nuevoComb, "id_tipo_evento": nuevoTipE
    };

    //console.log(" 39 " + cadena);

    this.servi.CrearEvento(cadena).then(res => { console.log(res) }).catch(err => { console.log(err) });
  }

  getmuni() {
    this.servi.getMunicipios().subscribe((data: { muncipio: [] }) => { this.municipios = data; }, error => { console.error(error + " ") });
    console.log();
  }
  getTipEven() {
    this.servi.getTipoEventos().subscribe((data: { tipoevento: [] }) => { this.tipoeventos = data; }, error => { console.error(error + " ") });
    console.log();
  }

}
