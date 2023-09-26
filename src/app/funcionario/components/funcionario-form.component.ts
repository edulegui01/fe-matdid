import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalMessage } from 'src/app/class/global-message';
import { ClienteToSave } from 'src/app/class/clienteToSave';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Settings } from 'src/app/class/settings';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/components/custom-dialog.component';
import { FuncionarioToSave } from 'src/app/class/funcionarioToSave';
import { FuncionarioService } from '../services/funcionario.service';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: '../templates/funcionario-form.component.html',
  styleUrls: ['../styles/funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {

  entityForm!:FormGroup;
  entity:any=null;
  params:any=null;
  viewText = GlobalMessage.VIEW_LABELS;
  colsSize=2;
  listadoLocalidad!:any[];
  funcionarioToSave!:FuncionarioToSave;
  routerInstance:Router;
  funcionarioToUpdate:any;
  snackbarInstance!: MatSnackBar;
  createDefaultMessage = 'EL REGISTRO';





  constructor(public funcionarioService:FuncionarioService, private formBuilder:FormBuilder, router: Router, private dialogInstance: MatDialog ) { 

    this.routerInstance = router;

    if (this.routerInstance.getCurrentNavigation()) {
        this.params = this.routerInstance?.getCurrentNavigation()?.extras.state
            ? this.routerInstance?.getCurrentNavigation()?.extras.state : null;

        if (this.params) {
            this.entity = this.params;
        }
    }

    this.funcionarioService.getLocalidades().subscribe(localidad => this.listadoLocalidad = localidad);

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
        direccion: [entity ? entity.direccion : '', Validators.required],
        telefono: [entity ? entity.telefono : '', Validators.required],
        fechaAlta: [entity ? entity.fechaAlta : '', Validators.required],
        localidad: [entity ? entity.localidad.id : '', Validators.required],
        activo: [entity ? entity.localidad.activo : '', Validators.required],
        fechaNac: [entity ? entity.localidad.fechaNac : '', Validators.required],

    });
  }

  saveCliente(){
    this.funcionarioToSave = {
      cedula:this.entityForm.controls['cedula'].value,
      localidad:{
        id:this.entityForm.controls['localidad'].value
      },
      apellido:this.entityForm.controls['apellido'].value,
      direccion:this.entityForm.controls['direccion'].value,
      fechaAlta:this.entityForm.controls['fechaAlta'].value,
      nombre:this.entityForm.controls['nombre'].value,
      fechaNac:this.entityForm.controls['fechaNac'].value,
      telefono:this.entityForm.controls['telefono'].value,
      activo:this.entityForm.controls['activo'].value
    }


    if (this.entityForm.invalid) {
      this.snackbarInstance.open(this.viewText.INVALID_FORM
          , 'OK'
          , {
              duration: Settings.SHORT_TIME
              , panelClass: Settings.FAILED_MESSAGE_CLASS
          }
      );
      return;
    }

      this.dialogInstance.open(CustomDialogComponent, {
          width: Settings.DIALOG_MEDIUM,
          data: {
              typeDialog: 'confirm',
              title: this.viewText.ATTENTION,
              message: `${this.viewText.CONFIRM_CREATE} <b>${this.createDefaultMessage}</b>?.`,
          },
      }).afterClosed().pipe().subscribe(data => {
          if (data) {
              

            //   this.funcionarioService.saveClientes(this.funcionarioToSave).subscribe(result => {
            //     this.routerInstance.navigate(['../cliente/listar-cliente'])
            //   });
          }
      });

   

  }


  updateCliente(){
    this.funcionarioToUpdate = {
        cedula:this.entityForm.controls['cedula'].value,
        localidad:{
          id:this.entityForm.controls['localidad'].value
        },
        apellido:this.entityForm.controls['apellido'].value,
        direccion:this.entityForm.controls['direccion'].value,
        fechaAlta:this.entityForm.controls['fechaAlta'].value,
        nombre:this.entityForm.controls['nombre'].value,
        fechaNac:this.entityForm.controls['fechaNac'].value,
        telefono:this.entityForm.controls['telefono'].value,
        activo:this.entityForm.controls['activo'].value
    }

    if (this.entityForm.invalid) {
      this.snackbarInstance.open(this.viewText.INVALID_FORM
          , 'OK'
          , {
              duration: Settings.SHORT_TIME
              , panelClass: Settings.FAILED_MESSAGE_CLASS
          }
      );
      return;
    }

      this.dialogInstance.open(CustomDialogComponent, {
          width: Settings.DIALOG_MEDIUM,
          data: {
              typeDialog: 'confirm',
              title: this.viewText.ATTENTION,
              message: `${this.viewText.CONFIRM_EDIT} <b>${this.createDefaultMessage}</b>?.`,
          },
      }).afterClosed().pipe().subscribe(data => {
          if (data) {
            // this.clienteService.updateCliente(this.entity.idPersona,this.clienteToUpdate).subscribe(result => {
            //   this.routerInstance.navigate(['../cliente/listar-cliente']);
            //   this.clienteService.editForm = false;
            // });
          }
      });

    

  }

  getErrorMessage(controlName: string) {
    const msg = this.entityForm.controls[controlName].hasError('required') ? 'EL CAMPO NO PUEDE ESTAR VACIO' : '';
    if (msg) {
        this.entityForm.controls[controlName].markAsTouched();
    }
    return msg;
  }

  closeForm() {
    this.routerInstance.navigate(['../funcionario/listar-funcionario']);
    this.funcionarioService.editForm = false;
  }



  onResize() {
    this.colsSize = window.innerWidth <= 400 ? 1 : 2;
  }

}


 


