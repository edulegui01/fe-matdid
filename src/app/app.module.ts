import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from './components/navigation.module';
import { ClienteModule } from './clientes/cliente.module';
import { CustomDialogModule } from './components/custom-dialog/custom-dialog.module';
import { ProveedorModule } from './proveedores/proveedor.module';
import { ProductoModule } from './producto/producto.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { LocalidadModule } from './localidad/localidad.module';
import { PruebaComponent } from './prueba/prueba.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NavigationModule,
    ClienteModule,
    CustomDialogModule,
    ProveedorModule,
    ProductoModule,
    FuncionarioModule,
    LocalidadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
