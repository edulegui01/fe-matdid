import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatTable, MatSort, MatPaginator, MatDialog, MatSnackBar } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global-service/global.service';
import { MENU_URLS } from 'src/app/components/navbar/routes';
import { CustomAbstractListComponent } from 'src/app/class/customAbstractListComponent';
import { EdificioService } from '../services/edificio.service';
import { GlobalMessage } from 'src/app/class/global-message';

@Component({
  selector: 'app-edificio-list',
  templateUrl: '../templates/edificio-list.component.html',
  styleUrls: ['../styles/edificio-list.component.scss']
})
export class EdificioListComponent extends CustomAbstractListComponent implements AfterViewInit, OnInit {

  displayedColumns = ['nombre', 'direccion', 'telefono', 'estado', 'options'];
  displayedFilters = ['nombre-filter', 'direccion-filter', 'telefono-filter', 'estado-filter', 'opciones-filter'];
  @ViewChild(MatTable, { read: false, static: false }) matTable: MatTable<any>;
  @ViewChild(MatSort, { read: false, static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { read: false, static: false }) paginator: MatPaginator;

  statusList = GlobalMessage.ACCOUNT_STATUS;

  constructor(
    private formBuilder: FormBuilder,
    private edificioService: EdificioService,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    public globalSrv: GlobalService,
  ) {
    super(MENU_URLS.EDIFICIO);
    this.entityService = edificioService;
    this.globalSrvInstance = globalSrv;
    this.routerInstance = router;
    this.dialogInstance = dialog;
    this.frmBuilder = formBuilder;
    this.matTableRef = this.matTable;

    //build filter form
    this.initFilter({
      id: [''],
      nombre: [''],
      direccion: [''],
      telefono: [''],
      estado: [this.statusList[0].value],
    });

    //set default sort options
    this.defaultColumSort = 'nombre';
    this.defaultSortDirection = 'asc';

    //set default url
    this.defaultUrlList = MENU_URLS.EDIFICIO.URL_BASE;

  }

  ngAfterViewInit() {
    this.sortRef = this.sort;
    this.paginatorRef = this.paginator;
    this.doAfterViewInit();
  }

  doFilter() {
    this.prepareFilter({
      id: this.filterForm.controls.id.value,
      nombre: this.filterForm.controls.nombre.value.toUpperCase(),
      direccion: this.filterForm.controls.direccion.value.toUpperCase(),
      telefono: this.filterForm.controls.telefono.value,
      estado: this.filterForm.controls.estado.value
    });
  }

  delete(element: any) {
    this.deleteDefaultMessage = element.nombre;
    this.prepareDelete(element, this.menuOptions.menuUrl);
  }
}
