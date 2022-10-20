import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  session!: SessionInterface;
  constructor(private router: Router) { }



}


/**
 * Interface que representa una sesion de usuario
 */
 export interface SessionInterface {
  alias: string;
  token: string;
  menus: Array<any>;
  permisos_menus: any; // objeto de permisos map/diccionario
  gestion: any;
  administracion: any;
  proveedores_ids:Array<any>;
}