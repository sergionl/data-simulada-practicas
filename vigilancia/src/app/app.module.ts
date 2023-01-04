import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BnNgIdleService } from 'bn-ng-idle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { UsuarioListComponent } from './usuarios/usuario-list/usuario-list.component';
import { DepartamentoListComponent } from './edificios/departamentos/departamento-list/departamento-list.component';
import { DepartamentoAddComponent } from './edificios/departamentos/departamento-add/departamento-add.component';
import { ResidenteAddComponent } from './edificios/residente/residente-add/residente-add.component';
import { ResidenteListComponent } from './edificios/residente/residente-list/residente-list.component';
import { AutosListComponent } from './edificios/autos/autos-list/autos-list.component';
import { AutosAddComponent } from './edificios/autos/autos-add/autos-add.component';
import { TarjetasListComponent } from './tarjetas/tarjetas-list/tarjetas-list.component';
import { TarjetasAddComponent } from './tarjetas/tarjetas-add/tarjetas-add.component';
import { EventosAddComponent } from './eventos/eventos-add/eventos-add.component';
import { EventosListComponent } from './eventos/eventos-list/eventos-list.component';
import { PagesComponent } from './shared/pages/pages.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { InicioComponent } from './inicio/inicio/inicio.component';
import { ReporteComponent } from './reporte/reporte/reporte.component';
import { DesconectarComponent } from './auth/desconectar/desconectar.component';
import { DepartamentoEditComponent } from './edificios/departamentos/departamento-edit/departamento-edit/departamento-edit.component';
import { AutosEditComponent } from './edificios/autos/autos-edit/autos-edit/autos-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    UsuarioListComponent,
    DepartamentoListComponent,
    DepartamentoAddComponent,
    ResidenteAddComponent,
    ResidenteListComponent,
    AutosListComponent,
    AutosAddComponent,
    TarjetasListComponent,
    TarjetasAddComponent,
    EventosAddComponent,
    EventosListComponent,
    PagesComponent,
    ForgotPasswordComponent,
    InicioComponent,
    ReporteComponent,
    DesconectarComponent,
    DepartamentoEditComponent,
    AutosEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BnNgIdleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
