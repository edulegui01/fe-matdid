import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationModule } from '../components/navigation.module';
import { CustomDialogModule } from '../components/custom-dialog/custom-dialog.module';
import { EdificioComponent } from './components/edificio.component';
import { EdificioListComponent } from './components/edificio-list.component';
import { EdificioFormComponent } from './components/edificio-form.component';


@NgModule({
  declarations: [
    EdificioComponent,
    EdificioListComponent,
    EdificioFormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NavigationModule,
    CustomDialogModule
  ]
})
export class EdificioModule { }
