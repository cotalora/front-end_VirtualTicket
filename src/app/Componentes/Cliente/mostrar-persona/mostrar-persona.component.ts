import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-mostrar-persona',
  templateUrl: './mostrar-persona.component.html',
  styleUrls: ['./mostrar-persona.component.css']
})
export class MostrarPersonaComponent implements OnInit {

  personas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const persona_id = this.route.snapshot.params["id"];
    this.getdetalles(persona_id);
  }
  getdetalles(id:string) {

    this.servi.getPersona('/' + id).subscribe((data: {}) => { this.personas = data; }, error => { console.log(error) });
  }

}
