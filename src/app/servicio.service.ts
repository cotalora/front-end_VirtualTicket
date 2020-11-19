import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable(
  {
    providedIn: 'root'
  })

export class ServicioService {

  private Url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }



  private extractData(res: Response) {
    //console.log("12", res);

    let body = res;

    //console.log("13")
    return body || {};
    ;
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)

    };
  }

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  // SERVICIO CRUL DE TIPOS DE DOCUMENTOS
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

  // Método Listar de los Tipos de documentos 
  getEventos(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/even/E", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getPuntosVenta(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/pun/PU", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getPersonas(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/per/P", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getBoletas(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/bol/B", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getInforme1(id,f2,f1): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/bol/INF1" + id + f2 + f1, httpOptions).pipe(
      map(this.extractData)
    );
  }
  getInforme2(id, f2, f1): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/bol/INF2" + id + f2 + f1, httpOptions).pipe(
      map(this.extractData)
    );
  }

  getMunicipios(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/muni", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getTipoDocumento(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipdoc", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getTipoPersona(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipperson", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getTipoEventos(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/tipeven", httpOptions).pipe(
      map(this.extractData)
    );
  }

  getCliente(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/per", httpOptions).pipe(
      map(this.extractData)
    );
  }

  getEventoo(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/even", httpOptions).pipe(
      map(this.extractData)
    );
  }
  getPunto(): Observable<any> {

    //console.log("estamos aqui  " + this.Url+ "/marca", httpOptions);

    return this.http.get(this.Url + "/pun", httpOptions).pipe(
      map(this.extractData)
    );
  }
  //-------------------------------------------------------------
  // Método mostrar un solo Tipo de documento 

  getEvento(id): Observable<any> {

    return this.http.get(this.Url + "/even/E" + id, httpOptions).pipe(
      map(this.extractData));
  }

  getPuntoVenta(id): Observable<any> {

    return this.http.get(this.Url + "/pun/PU" + id, httpOptions).pipe(
      map(this.extractData));
  }

  getPersona(id): Observable<any> {

    return this.http.get(this.Url + "/per/P" + id, httpOptions).pipe(
      map(this.extractData));
  }
  

  getBoleta(id): Observable<any> {

    return this.http.get(this.Url + "/bol/B" + id, httpOptions).pipe(
      map(this.extractData));
  }

  async updateEvento(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/even", cadena, httpOptions).toPromise()
    });
  }

  async updatePuntoVenta(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/pun", cadena, httpOptions).toPromise()
    });
  }

  async updatePersona(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/per", cadena, httpOptions).toPromise()
    });
  }

  async updateBoleta(cadena): Promise<any> {

    //console.log("33 " + cadena)
    //console.log("tales 60  " + cadena.id_tip_doc + " - " + cadena.tipo_documento+ " - " +  cadena.iniciales_tip_doc, this.Url + "/tipdoc")


    return new Promise((resolve, reject) => {
      this.http.put(this.Url + "/bol", cadena, httpOptions).toPromise()
    });
  }

  async CrearEvento(Color): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/even", Color, httpOptions).toPromise()
    });
  }

  async CrearPuntoVenta(Color): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/pun", Color, httpOptions).toPromise()
    });
  }
  async CrearPersona(Color): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/per", Color, httpOptions).toPromise()
    });
  }
  async CrearBoleta(Color): Promise<any> {

    //console.log(Color, this.Url+"/color")

    return new Promise((resolve, reject) => {
      this.http.post(this.Url + "/bol", Color, httpOptions).toPromise()
    });
  }
}