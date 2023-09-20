import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, observable, throwError } from 'rxjs';
import { ClienteData } from 'src/app/class/clienteData';
import { ProductoData } from 'src/app/class/productoData';
import {Settings} from 'src/app/class/settings';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  httpUrls={
    urlListar:'/producto/listar',
    urlGuarda:'/producto/guardar',
    urlBuscarId:'/producto/buscar/',
    urlModificar:'/producto/actualizar/',
    urlBuscarDocu:'/producto/buscar-docu',
    urlLocalidadListar:'/localidad/listar',
    urlActualiazr:'/producto/actualizar/',
    urlEliminar:'/producto/borrar/'
  }

  editForm:boolean=false;

  constructor(private http: HttpClient) { }


  public getProductos(page:any='0',size:any='10',nombre:string=''): Observable<ProductoData>{
    
    let params = new HttpParams();

    params = params.append('page',String(page));
    params = params.append('size',String(size));
    params = params.append('nombre',String(nombre));
    


    return this.http.get<ProductoData>(Settings.URL_BASE+this.httpUrls.urlListar,{params}).pipe(
      map((productoData:ProductoData) => productoData)
    )

  }

  

  


}
