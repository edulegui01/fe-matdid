import { Component } from '@angular/core';
import { MENU_URLS } from 'src/app/components/navbar/routes';
import { GlobalService } from 'src/app/global-service/global.service';
import { EdificioService } from '../services/edificio.service';

@Component({
    selector: 'app-edificio',
    templateUrl: '../templates/edificio.component.html',
    styleUrls: ['../styles/edificio.component.scss'],
})
export class EdificioComponent {

    menuOptions = {
        menuUrl: MENU_URLS.EDIFICIO.URL_BASE,
        listar: MENU_URLS.EDIFICIO.LISTAR.PERMISO,
        editar: MENU_URLS.EDIFICIO.EDITAR.PERMISO,
        nuevo: MENU_URLS.EDIFICIO.NUEVO.PERMISO,
        eliminar: MENU_URLS.EDIFICIO.ELIMINAR.PERMISO,
    };

    constructor(
        public edificioService: EdificioService,
        public globalSvc: GlobalService,
    ) {
    }

}
