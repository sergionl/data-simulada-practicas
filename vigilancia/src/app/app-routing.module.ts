import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//components
//auth
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {DesconectarComponent} from './auth/desconectar/desconectar.component';
//shared
import {NavbarComponent} from './shared/navbar/navbar.component';
import {PagesComponent} from './shared/pages/pages.component';
//inicio
import {InicioComponent} from './inicio/inicio/inicio.component';
//usuario
import {UsuarioListComponent} from './usuarios/usuario-list/usuario-list.component';
//edificios
import {DepartamentoListComponent} from './edificios/departamentos/departamento-list/departamento-list.component';
import {DepartamentoAddComponent} from './edificios/departamentos/departamento-add/departamento-add.component';
import {ResidenteListComponent} from './edificios/residente/residente-list/residente-list.component';
import {ResidenteAddComponent} from './edificios/residente/residente-add/residente-add.component';
import {AutosListComponent} from './edificios/autos/autos-list/autos-list.component';
import {AutosAddComponent} from './edificios/autos/autos-add/autos-add.component';
import {DepartamentoEditComponent} from './edificios/departamentos/departamento-edit/departamento-edit/departamento-edit.component';
import {AutosEditComponent} from './edificios/autos/autos-edit/autos-edit/autos-edit.component';
//tarjetas
import {TarjetasAddComponent} from './tarjetas/tarjetas-add/tarjetas-add.component';
import {TarjetasListComponent} from './tarjetas/tarjetas-list/tarjetas-list.component';
//eventos
import {EventosAddComponent} from './eventos/eventos-add/eventos-add.component';
import {EventosListComponent} from './eventos/eventos-list/eventos-list.component';
//reporte
import {ReporteComponent} from './reporte/reporte/reporte.component';

const routes: Routes = [
  //auth
  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path: 'login',component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path:'forgotPassword',component: ForgotPasswordComponent},
  {path:'desconectado',component:DesconectarComponent},
  {path:'reporte',component:ReporteComponent},
  {path: 'dashboard',component: PagesComponent,
  children:[
    //inicio
    {path:'inicio',component: DepartamentoListComponent},
    //usuarios
    {path:'usuarios',component: UsuarioListComponent},
    //edificios
    {path:'trabajador',component: DepartamentoListComponent},
    {path:'addTrabajador', component: DepartamentoAddComponent},
    {path:'tarea',component:AutosListComponent},
    {path:'addTarea',component:AutosAddComponent},
    {path:'editTrabajador/:id',component: DepartamentoEditComponent},
    {path:'editTarea/:id',component: AutosEditComponent},

  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
