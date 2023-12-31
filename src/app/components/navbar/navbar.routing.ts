import { Routes } from '@angular/router';
import { MENU_URLS } from './routes';
import { ClienteComponent } from 'src/app/clientes/components/cliente.component';
import { routes as routeCliente } from 'src/app/clientes/cliente.routing';
import { ProveedorComponent } from 'src/app/proveedores/components/proveedor.component';
import { routes as routeProveedor } from 'src/app/proveedores/proveedor.routing';
import {routes as routeProducto} from 'src/app/producto/producto.routing'
import { ProductoComponent } from 'src/app/producto/components/producto.component';

export const routes: Routes = [
    {
        path: MENU_URLS.CLIENTE.URL_BASE,
        component: ClienteComponent,
        children: routeCliente
    },
    {
        path: MENU_URLS.PROVEEDOR.URL_BASE,
        component: ProveedorComponent,
        children: routeProveedor
    },
    {
        path: MENU_URLS.PRODUCTO.URL_BASE,
        component: ProductoComponent,
        children: routeProducto
    }
];
