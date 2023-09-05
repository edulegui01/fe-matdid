import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GlobalMessage } from 'src/app/class/global-message';
import { MENU_URLS } from 'src/app/components/navbar/routes';
import { ClientesService } from '../services/clientes.service';
import { Cliente } from 'src/app/class/cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: '../templates/cliente-list.component.html',
  styleUrls: ['../styles/cliente-list.component.scss']
})
export class ClienteListComponent  implements OnInit {
  dataSource:any={};

  clienteToEdit!:any;

  routerInstant!:Router;
 
  
  filterForm!: FormGroup
  

  constructor(private clienteService:ClientesService ) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(cliente => (this.dataSource = cliente));
    
    this.filterForm = new FormGroup({
      cedula: new FormControl(''),
      name: new FormControl('')
    })
  }


  OnClickEditCliente(){
    //this.clienteService.searchClienteById('4').subscribe(cliente => (this.clienteToEdit = cliente))

    this.clienteService.editForm=true;
    //this.routerInstant.navigate(['../'+'editar-cliente']);
    
    

  }


  

  displayedColumns: string[] = ['nombre', 'apellido', 'cedula', 'ruc', 'direccion', 'options'];
  displayedFilters: string[] = ['cedula-filter', 'name-filter'];
  
}

