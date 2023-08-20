import { Routes } from '@angular/router';
import { MENU_URLS } from '../components/navbar/routes';
import { EdificioListComponent } from './components/edificio-list.component';
import { EdificioFormComponent } from './components/edificio-form.component';


export const routes: Routes = [
    { path: '', redirectTo: MENU_URLS.EDIFICIO.LISTAR.URL, pathMatch: 'full' },
    { path: MENU_URLS.EDIFICIO.LISTAR.URL, component: EdificioListComponent },
    { path: MENU_URLS.EDIFICIO.NUEVO.URL, component: EdificioFormComponent },
    { path: MENU_URLS.EDIFICIO.EDITAR.URL, component: EdificioFormComponent },
];
