import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServicioService } from '../../../servicio.service';

@Component({
  selector: 'app-informe2-boleta',
  templateUrl: './informe2-boleta.component.html',
  styleUrls: ['./informe2-boleta.component.css']
})
export class Informe2BoletaComponent implements OnInit {

  informes2: any = [];

  Informe2AEvento: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private servi: ServicioService,
    Router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.Informe2AEvento = this.formBuilder.group(
      {
        fechaf: [],
        fechai: []
      });
  }
  getinforme2() {
    var fechaf = this.Informe2AEvento.getRawValue()['fechaf'];
    var fechai = this.Informe2AEvento.getRawValue()['fechai'];

    const id = this.route.snapshot.params["id"];

    this.servi.getInforme2('/' + id, '/' + fechai, '/' + fechaf).subscribe((data: { informe: [] }) => { this.informes2 = data; }, error => { console.error(error + " ") });
  }

}
