import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CustomAbstractListComponent } from 'src/app/class/customAbstractListComponent';
import { GlobalMessage } from 'src/app/class/global-message';
import { MENU_URLS } from 'src/app/components/navbar/routes';

@Component({
  selector: 'app-cliente-list',
  templateUrl: '../templates/cliente-list.component.html',
  styleUrls: ['../styles/cliente-list.component.scss']
})
export class ClienteListComponent extends CustomAbstractListComponent implements OnInit {

 
  
  

  constructor(private formBuilder: FormBuilder
    ) { 
        super(MENU_URLS.CLIENTE);
        this.frmBuilder = formBuilder;

        this.initFilter({
          position: [''],
          name: [''],
          weight: [''],
          symbol: [''],
          
        });
  }


  doFilter() {
    this.prepareFilter({
      // id: this.filterForm.controls.id.value,
      // nombre: this.filterForm.controls.nombre.value.toUpperCase(),
      // direccion: this.filterForm.controls.direccion.value.toUpperCase(),
      // telefono: this.filterForm.controls.telefono.value,
      // estado: this.filterForm.controls.estado.value
    });
  }

  delete(element: any) {
    // this.deleteDefaultMessage = element.nombre;
    // this.prepareDelete(element, this.menuOptions.menuUrl);
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'options'];
  displayedFilters: string[] = ['position-filter', 'name-filter', 'weight-filter', 'symbol-filter','opciones-filter'];
  
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
