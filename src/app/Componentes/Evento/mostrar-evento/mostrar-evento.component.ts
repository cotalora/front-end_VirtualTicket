import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ServicioService } from 'src/app/servicio.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from "@angular/router"

@Component({
  selector: 'app-mostrar-evento',
  templateUrl: './mostrar-evento.component.html',
  styleUrls: ['./mostrar-evento.component.css']
})
export class MostrarEventoComponent implements OnInit {

  eventos: any = [];
  

  filtrarTipDoc: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    const evento_id = this.route.snapshot.params["id"];
    this.getdetalles(evento_id);
  }
    
  getdetalles(id:string){

    this.servi.getEvento('/' + id).subscribe((data: {}) => { this.eventos = data; }, error => { console.log(error) });
  }

}
