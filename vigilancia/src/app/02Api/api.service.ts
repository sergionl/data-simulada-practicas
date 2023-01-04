import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import {tarea} from 'src/app/01Models/tarea.model';
import {trabajador} from 'src/app/01Models/trabajadores-model';
import {user,loginForm} from 'src/app/01Models/user-model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  //User
  register(user: user){
    return this.http.post<any>(`${environment.apiUrl}/user/`,user)
    .pipe(catchError((e) => throwError(e)));
  }

  login(user: loginForm): Observable<any>{
    return this.http.post<any>(`${environment.apiUrl}/user/login/`,user)
    .pipe(catchError((e) => throwError(e)));
  }

  //Trabajador
  getListFkTrabajador(id: number): Observable<trabajador[]>{
    return this.http.get<trabajador[]>(`${environment.apiUrl}/trabajo/trabajador_get_with_fk/?u_id=${id}`)
    .pipe(catchError((e) => throwError(e)));
  }

  createTrabajador(trabajador: trabajador){
    return this.http.post<any>(`${environment.apiUrl}/trabajo/`,trabajador)
    .pipe(catchError((e) => throwError(e)));
  }

  getElementByIdTrabajador(id: number){
    return this.http.get<any>(`${environment.apiUrl}/trabajo/${id}/`)
    .pipe(catchError((e) => throwError(e)));
  }

  deleteTrabajador(id: number){
    return this.http.delete<any>(`${environment.apiUrl}/trabajo/${id}/`)
    .pipe(catchError((e) => throwError(e)));
  }

  editTrabajador(id: number, trabajador: trabajador){
    return this.http.put<any>(`${environment.apiUrl}/trabajo/${id}/`,trabajador)
    .pipe(catchError((e) => throwError(e)));
  }

  //Tarea
  getListFkTarea(id: number): Observable<tarea[]>{
    return this.http.get<tarea[]>(`${environment.apiUrl}/tarea/tarea_get_with_fk/?u_id=${id}`)
    .pipe(catchError((e) => throwError(e)));
  }
  

  createTarea(tarea: tarea){
    return this.http.post<any>(`${environment.apiUrl}/tarea/`,tarea)
    .pipe(catchError((e) => throwError(e)));
  }

  getElementByIdTarea(id: number){
    return this.http.get<any>(`${environment.apiUrl}/tarea/${id}/`)
    .pipe(catchError((e) => throwError(e)));
  }

  deleteTarea(id: number){
    return this.http.delete<any>(`${environment.apiUrl}/tarea/${id}/`)
    .pipe(catchError((e) => throwError(e)));
  }

  editTarea(id: number, tarea: tarea){
    return this.http.put<any>(`${environment.apiUrl}/tarea/${id}/`,tarea)
    .pipe(catchError((e) => throwError(e)));
  }
}
