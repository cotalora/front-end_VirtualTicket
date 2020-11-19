import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';

@Component({
  selector: 'app-listar-personas',
  templateUrl: './listar-personas.component.html',
  styleUrls: ['./listar-personas.component.css']
})
export class ListarPersonasComponent implements OnInit {

  personas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }


  ngOnInit() {
    this.servi.getPersonas().subscribe((data: { puntoventa: [] }) => { this.personas = data; }, error => { console.error(error + " ") });
    console.log();
  }

}
