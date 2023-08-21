import { Component } from '@angular/core';
import { MENU_URLS } from 'src/app/components/navbar/routes';
import { GlobalService } from 'src/app/global-service/global.service';
import { EdificioService } from '../services/edificio.service';

@Component({
    selector: 'app-cliente',
    templateUrl: '../templates/edificio.component.html',
    styleUrls: ['../styles/edificio.component.scss'],
})
export class ClienteComponent {

    menuOptions = {
        menuUrl: MENU_URLS.CLIENTE.URL_BASE,
        listar: MENU_URLS.CLIENTE.LISTAR.PERMISO,
        editar: MENU_URLS.CLIENTE.EDITAR.PERMISO,
        nuevo: MENU_URLS.CLIENTE.NUEVO.PERMISO,
        eliminar: MENU_URLS.CLIENTE.ELIMINAR.PERMISO,
    };

    constructor(
        public edificioService: EdificioService,
        public globalSvc: GlobalService,
    ) {
    }

}
