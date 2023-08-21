import { Routes } from '@angular/router';
import { MENU_URLS } from './routes';
import { ClienteComponent } from 'src/app/cliente/components/cliente.component';
import { routes as routeCliente } from 'src/app/cliente/edificio.routing';

export const routes: Routes = [
    {
        path: MENU_URLS.CLIENTE.URL_BASE,
        component: ClienteComponent,
        children: routeCliente
    }
];
