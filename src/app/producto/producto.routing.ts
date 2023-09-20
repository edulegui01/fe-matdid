import { Routes } from '@angular/router';
import { MENU_URLS } from '../components/navbar/routes';
import { ProductoListComponent } from './components/producto-list.component';
import { ProductoFormComponent } from './components/producto-form.component';




export const routes: Routes = [
    { path: '', redirectTo: MENU_URLS.PRODUCTO.LISTAR.URL, pathMatch: 'full' },
    { path: MENU_URLS.PRODUCTO.LISTAR.URL, component: ProductoListComponent },
    { path: MENU_URLS.PRODUCTO.NUEVO.URL, component: ProductoFormComponent },
    { path: MENU_URLS.PRODUCTO.EDITAR.URL, component: ProductoFormComponent },
];