import { Routes } from '@angular/router';
import { MENU_URLS } from './routes';
import { ClienteComponent } from 'src/app/clientes/components/cliente.component';
import { routes as routeCliente } from 'src/app/clientes/cliente.routing';

export const routes: Routes = [
    {
        path: MENU_URLS.CLIENTE.URL_BASE,
        component: ClienteComponent,
        children: routeCliente
    }
];
