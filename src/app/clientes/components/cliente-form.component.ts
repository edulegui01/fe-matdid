import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalMessage } from 'src/app/class/global-message';

@Component({
  selector: 'app-cliente-form',
  templateUrl: '../templates/cliente-form.component.html',
  styleUrls: ['../styles/cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {

  entityForm!:FormGroup;
  entity:any=null;
  params=true;
  viewText = GlobalMessage.VIEW_LABELS;
  colsSize=2;





  constructor(public clienteService:ClientesService, private formBuilder:FormBuilder ) { 

    this.buildForm(this.entity);

  }

  ngOnInit(): void {
  }

  buildForm(entity: any) {
    this.entityForm = this.formBuilder.group({
        id: [entity ? entity.id : ''],
        nombre: [entity ? entity.nombre : '', Validators.required],
        apellido: [entity ? entity.apellido : '', Validators.required],
        cedula: [entity ? entity.cedula : '', Validators.required],
        ruc: [entity ? entity.ruc : ''],
        direccion: [entity ? entity.direccion : '', Validators.required],
        telefono: [entity ? entity.telefono : '', Validators.required],
        email: [entity ? entity.email : '', Validators.required]
    });
  }

  getErrorMessage(controlName: string) {
    const msg = this.entityForm.controls[controlName].hasError('required') ? 'EL CAMPO NO PUEDE ESTAR VACIO' : '';
    if (msg) {
        this.entityForm.controls[controlName].markAsTouched();
    }
    return msg;
  }


  onResize() {
    this.colsSize = window.innerWidth <= 400 ? 1 : 2;
}

}


 


