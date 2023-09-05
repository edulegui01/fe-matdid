import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Cliente } from 'src/app/class/cliente';
import {Settings} from 'src/app/class/settings';


@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  httpUrls={
    urlListar:'/persona/listar',
    urlBuscarId:'/persona/buscar/',
    urlModificar:'/persona/actualizar/'
  }

  editForm:boolean=false;

  constructor(private http: HttpClient) { }


  public getClientes(): Observable<any>{
    
    return this.http.get<any>(Settings.URL_BASE+this.httpUrls.urlListar);

  }

  public searchClienteById(id:string):Observable<any>{
     console.log(id)
    return this.http.get(Settings.URL_BASE+this.httpUrls.urlBuscarId+id);

  }
}
