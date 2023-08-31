import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GlobalMessage } from 'src/app/class/global-message';
import { MENU_URLS } from 'src/app/components/navbar/routes';

@Component({
  selector: 'app-cliente-list',
  templateUrl: '../templates/cliente-list.component.html',
  styleUrls: ['../styles/cliente-list.component.scss']
})
export class ClienteListComponent  implements OnInit {

 
  
  filterForm!: FormGroup

  constructor( 
    ) { 
        

        
  }

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      cedula: new FormControl(''),
      name: new FormControl('')
    })
  }


  

  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'ruc', 'direccion', 'options'];
  displayedFilters: string[] = ['cedula-filter', 'name-filter'];
  
}

