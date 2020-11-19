import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  municipios: any = [];
  tipodocumentos: any = [];
  tipopersonas: any = [];

  CrearAPersonas: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getmuni();
    this.gettipdoc();
    this.gettipper();

    this.CrearAPersonas = this.formBuilder.group(
      {
        nuevoNomP: [],
        nuevoNom2P: [],
        nuevoApeP: [],
        nuevoApe2P: [],
        nuevaDirP: [],
        nuevaConP: [],
        nuevaDir2P: [],
        nuevoNumP: [],
        nuevaFecP: [],
        nuevoCelP: [],
        nuevoTelP: [],
        nuevoTidP: [],
        nuevoTipP: [],
        nuevoMunP: []
      });
  }
  public CrearPer() {

    var nuevoNomP = this.CrearAPersonas.getRawValue()['nuevoNomP'];
    var nuevoNom2P = this.CrearAPersonas.getRawValue()['nuevoNom2P'];
    var nuevoApeP = this.CrearAPersonas.getRawValue()['nuevoApeP'];
    var nuevoApe2P = this.CrearAPersonas.getRawValue()['nuevoApe2P'];
    var nuevaDirP = this.CrearAPersonas.getRawValue()['nuevaDirP'];
    var nuevaConP = this.CrearAPersonas.getRawValue()['nuevaConP'];
    var nuevaDir2P = this.CrearAPersonas.getRawValue()['nuevaDir2P'];
    var nuevoNumP = this.CrearAPersonas.getRawValue()['nuevoNumP'];
    var nuevaFecP = this.CrearAPersonas.getRawValue()['nuevaFecP'];
    var nuevoCelP = this.CrearAPersonas.getRawValue()['nuevoCelP'];
    var nuevoTelP = this.CrearAPersonas.getRawValue()['nuevoTelP'];
    var nuevoTidP = this.CrearAPersonas.getRawValue()['nuevoTidP'];
    var nuevoTipP = this.CrearAPersonas.getRawValue()['nuevoTipP'];
    var nuevoMunP = this.CrearAPersonas.getRawValue()['nuevoMunP'];

    var cadena = {
      "primer_nombre_persona": nuevoNomP, "segundo_nombre_persona": nuevoNom2P, "primer_apellido_persona": nuevoApeP, "segundo_apellido_persona": nuevoApe2P,
      "direccion_correro_persona": nuevaDirP, "contrasena_persona": nuevaConP, "direccion_residencia_persona": nuevaDir2P, "numero_documento_persona": nuevoNumP, "fecha_nacimiento_persona": nuevaFecP,
      "numero_celular_persona": nuevoCelP, "numero_telefono_persona": nuevoTelP, "id_tipo_documento": nuevoTidP, "id_tipo_persona": nuevoTipP, "id_municipio": nuevoMunP
    };
    this.servi.CrearPersona(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) });
  }

  getmuni() {
    this.servi.getMunicipios().subscribe((data: { muncipio: [] }) => { this.municipios = data; }, error => { console.error(error + " ") });
    console.log();
  }
  gettipdoc() {
    this.servi.getTipoDocumento().subscribe((data: { tipodocumento: [] }) => { this.tipodocumentos = data; }, error => { console.error(error + " ") });
    console.log();
  }
  gettipper() {
    this.servi.getTipoPersona().subscribe((data: { tipopersona: [] }) => { this.tipopersonas = data; }, error => { console.error(error + " ") });
    console.log();
  }

}
