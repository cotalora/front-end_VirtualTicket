import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.css']
})
export class ModificarPersonaComponent implements OnInit {

  personas: any = [];
  municipios: any = [];
  tipodocumentos: any = [];
  tipopersonas: any = [];

  ActualizarAPersonas: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const persona_id = this.route.snapshot.params["id"];
    this.getdetalles(persona_id);
    this.getmuni();
    this.gettipdoc();
    this.gettipper();

    this.ActualizarAPersonas = this.formBuilder.group(
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

  public getdetalles(id: string) {
    this.servi.getPersona('/' + id).subscribe((data: {}) => { this.personas = data; }, error => { console.log(error) });
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

  public ActualizarPersona() {

    var nuevoNomP = this.ActualizarAPersonas.getRawValue()['nuevoNomP'];
    var nuevoNom2P = this.ActualizarAPersonas.getRawValue()['nuevoNom2P'];
    var nuevoApeP = this.ActualizarAPersonas.getRawValue()['nuevoApeP'];
    var nuevoApe2P = this.ActualizarAPersonas.getRawValue()['nuevoApe2P'];
    var nuevaDirP = this.ActualizarAPersonas.getRawValue()['nuevaDirP'];
    var nuevaConP = this.ActualizarAPersonas.getRawValue()['nuevaConP'];
    var nuevaDir2P = this.ActualizarAPersonas.getRawValue()['nuevaDir2P'];
    var nuevoNumP = this.ActualizarAPersonas.getRawValue()['nuevoNumP'];
    var nuevaFecP = this.ActualizarAPersonas.getRawValue()['nuevaFecP'];
    var nuevoCelP = this.ActualizarAPersonas.getRawValue()['nuevoCelP'];
    var nuevoTelP = this.ActualizarAPersonas.getRawValue()['nuevoTelP'];
    var nuevoTidP = this.ActualizarAPersonas.getRawValue()['nuevoTidP'];
    var nuevoTipP = this.ActualizarAPersonas.getRawValue()['nuevoTipP'];
    var nuevoMunP = this.ActualizarAPersonas.getRawValue()['nuevoMunP'];


    var cadena = {
      "id_persona": this.route.snapshot.params["id"], "primer_nombre_persona": nuevoNomP, "segundo_nombre_persona": nuevoNom2P, "primer_apellido_persona": nuevoApeP, "segundo_apellido_persona": nuevoApe2P,
      "direccion_correro_persona": nuevaDirP, "contrasena_persona": nuevaConP, "direccion_residencia_persona": nuevaDir2P, "numero_documento_persona": nuevoNumP, "fecha_nacimiento_persona": nuevaFecP,
      "numero_celular_persona": nuevoCelP, "numero_telefono_persona": nuevoTelP, "id_tipo_documento": nuevoTidP, "id_tipo_persona": nuevoTipP, "id_municipio": nuevoMunP
    };
    console.log(this.servi.updatePersona(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) }));

    this.servi.updatePersona(cadena).then(res => { console.log("res", res) }).catch(err => { console.log(err) });
  }
}
