import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioService } from '../../../servicio.service';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-mostrar-boleta',
  templateUrl: './mostrar-boleta.component.html',
  styleUrls: ['./mostrar-boleta.component.css']
})
export class MostrarBoletaComponent implements OnInit {

  boletas: any = [];

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const bloleta_id = this.route.snapshot.params["id"];
    this.getdetalles(bloleta_id);
  }
  getdetalles(id:string) {

    this.servi.getBoleta('/' + id).subscribe((data: {}) => { this.boletas = data; }, error => { console.log(error) });
  }

}
