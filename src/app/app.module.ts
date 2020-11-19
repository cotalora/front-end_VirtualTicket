import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ServicioService } from './servicio.service';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListarEventosComponent } from './Componentes/Evento/listar-eventos/listar-eventos.component';
import { MostrarEventoComponent } from './Componentes/Evento/mostrar-evento/mostrar-evento.component';
import { ModificarEventoComponent } from './Componentes/Evento/modificar-evento/modificar-evento.component';
import { CrearEventoComponent } from './Componentes/Evento/crear-evento/crear-evento.component';
import { ListarPuntoVentaComponent } from './Componentes/PuntoDeVenta/listar-punto-venta/listar-punto-venta.component';
import { MostrarPuntoVentaComponent } from './Componentes/PuntoDeVenta/mostrar-punto-venta/mostrar-punto-venta.component';
import { ModificarPuntoVentaComponent } from './Componentes/PuntoDeVenta/modificar-punto-venta/modificar-punto-venta.component';
import { CrearPuntoVentaComponent } from './Componentes/PuntoDeVenta/crear-punto-venta/crear-punto-venta.component';
import { ListarPersonasComponent } from './Componentes/Cliente/listar-personas/listar-personas.component';
import { MostrarPersonaComponent } from './Componentes/Cliente/mostrar-persona/mostrar-persona.component';
import { ModificarPersonaComponent } from './Componentes/Cliente/modificar-persona/modificar-persona.component';
import { CrearPersonaComponent } from './Componentes/Cliente/crear-persona/crear-persona.component';
import { ListarBoletasComponent } from './Componentes/Boleta/listar-boletas/listar-boletas.component';
import { MostrarBoletaComponent } from './Componentes/Boleta/mostrar-boleta/mostrar-boleta.component';
import { CrearBoletaComponent } from './Componentes/Boleta/crear-boleta/crear-boleta.component';
import { ModificarBoletaComponent } from './Componentes/Boleta/modificar-boleta/modificar-boleta.component';
import { Informe1BoletaComponent } from './Componentes/Boleta/informe1-boleta/informe1-boleta.component';
import { Informe2BoletaComponent } from './Componentes/Boleta/informe2-boleta/informe2-boleta.component';

const appRoutes: Routes = 
[
  { path: '', component: ListarEventosComponent, },
  { path: 'detalles/:id', component: MostrarEventoComponent, },
  { path: 'modificarevento/:id', component: ModificarEventoComponent },
  { path: 'modificarpuntoeven/:id', component: ModificarPuntoVentaComponent },
  { path: 'crearevento', component: CrearEventoComponent },
  { path: 'listarpuntoventa', component: ListarPuntoVentaComponent},
  { path: 'mostarpuntoventa/:id', component: MostrarPuntoVentaComponent},
  { path: 'crearpuntoventa', component: CrearPuntoVentaComponent },
  { path: 'listarclientes', component: ListarPersonasComponent },
  { path: 'mostrarpersona/:id', component: MostrarPersonaComponent },
  { path: 'modificarpersona/:id', component: ModificarPersonaComponent },
  { path: 'crearpersona', component: CrearPersonaComponent },
  { path: 'listarboletas', component: ListarBoletasComponent },
  { path: 'mostrarboleta/:id', component: MostrarBoletaComponent },
  { path: 'modificarboleta/:id', component: ModificarBoletaComponent },
  { path: 'crearboleta', component: CrearBoletaComponent },
  { path: 'informe1/:id', component: Informe1BoletaComponent },
  { path: 'informe2/:id', component: Informe2BoletaComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    ListarEventosComponent,
    MostrarEventoComponent,
    ModificarEventoComponent,
    CrearEventoComponent,
    ListarPuntoVentaComponent,
    MostrarPuntoVentaComponent,
    ModificarPuntoVentaComponent,
    CrearPuntoVentaComponent,
    ListarPersonasComponent,
    MostrarPersonaComponent,
    ModificarPersonaComponent,
    CrearPersonaComponent,
    ListarBoletasComponent,
    MostrarBoletaComponent,
    CrearBoletaComponent,
    ModificarBoletaComponent,
    Informe1BoletaComponent,
    Informe2BoletaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes), // se agregan estos 
    BrowserModule,
    HttpClientModule  // <- Agregar la clase
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
