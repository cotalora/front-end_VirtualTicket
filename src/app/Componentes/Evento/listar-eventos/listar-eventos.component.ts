import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';

@Component({
  selector: 'app-listar-eventos',
  templateUrl: './listar-eventos.component.html',
  styleUrls: ['./listar-eventos.component.scss']
})
export class ListarEventosComponent implements OnInit {

  eventos: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router) { }

  ngOnInit() {

    this.servi.getEventos().subscribe((data: { evento: [] }) => { this.eventos = data; }, error => { console.error(error + " ") });
    console.log();
  }
}

