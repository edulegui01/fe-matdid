import { Component, ViewChild, OnDestroy, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GlobalMessage } from 'src/app/class/global-message';
import { Router } from '@angular/router';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GlobalService } from 'src/app/global-service/global.service';
import { MENU_URLS } from 'src/app/components/navbar/routes';
import { CustomAbstractFormComponent } from 'src/app/class/customAbstractFormComponent';
import { EdificioService } from '../services/edificio.service';

@Component({
    selector: 'app-form-edificio',
    templateUrl: '../templates/edificio-form.component.html',
    styleUrls: ['../styles/edificio-form.component.scss']
})
//CustomAbstractFormComponent ES UNA CLASE CREADA.
export class EdificioFormComponent extends CustomAbstractFormComponent implements OnDestroy {

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private snackbar: MatSnackBar,
        private dialog: MatDialog,
        public edificioService: EdificioService,
        private globalService: GlobalService,

    ) {
        super(MENU_URLS.EDIFICIO, router);//PASA EL URL DEL COMPONENTE QUE ESTA EN routes.ts.

        this.entityService = edificioService;
        this.globalSrvInstance = globalService;
        this.routerInstance = router;
        this.dialogInstance = dialog;
        this.frmBuilder = formBuilder;
        this.snackbarInstance = snackbar;

        this.buildForm(this.params);
    }
    //CONSTRUIR.
    buildForm(entity: any) {
        this.entityForm = this.formBuilder.group({
            id: [entity ? entity.id : ''],
            nombre: [entity ? entity.nombre : '', Validators.required],
            direccion: [entity ? entity.direccion : '', Validators.required],
            telefono: [entity ? entity.telefono : '', Validators.required],
            estado: [entity ? entity.estado : true, Validators.required]
        });
    }

    create() {
        this.doCreate(this.getFormValues());
    }
    update() {
        this.doUpdate(this.getFormValues());
    }

    //CAPTURA LOS ELEMENTOS PARA PODER SER EDITADO O ELIMINADO.
    getFormValues() {
        const data = {
            id: this.entityForm.controls.id.value,
            nombre: this.entityForm.controls.nombre.value.toUpperCase(),
            direccion: this.entityForm.controls.direccion.value.toUpperCase(),
            telefono: this.entityForm.controls.telefono.value.toUpperCase(),
            estado: this.entityForm.controls.estado.value,
            permissionURL: this.globalService.changeDashToBackSlash(this.menuOptions.menuUrl)
        };

        return data;
    }

    closeEdit() {
        this.routerInstance.navigate(['../' + this.menuOptions.menuUrl]);
    }

}
