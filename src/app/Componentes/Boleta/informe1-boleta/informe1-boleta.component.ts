import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../../servicio.service';


@Component({
  selector: 'app-informe1-boleta',
  templateUrl: './informe1-boleta.component.html',
  styleUrls: ['./informe1-boleta.component.css']
})
export class Informe1BoletaComponent implements OnInit {

  informes1: any = [];

  Informe1AEvento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.Informe1AEvento = this.formBuilder.group(
      {
        fechaf: [],
        fechai: []
      });
  }
  prueba() {
    var fechaf = this.Informe1AEvento.getRawValue()['fechaf'];
    var fechai = this.Informe1AEvento.getRawValue()['fechai'];

    const id = this.route.snapshot.params["id"];

    this.servi.getInforme1('/' + id, '/' + fechai, '/' + fechaf).subscribe((data: { informe: [] }) => { this.informes1 = data; }, error => { console.error(error + " ") });
  }

}
