import { Routes } from "@angular/router";
import { MENU_URLS } from "../components/navbar/routes";
import { PruebaComponent } from "./prueba.component";


export const routes: Routes = [
    
    { path: MENU_URLS.PRODUCTO.LISTAR.URL, component: PruebaComponent },
   
];