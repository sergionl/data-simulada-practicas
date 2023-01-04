import { Component, OnInit } from '@angular/core';
import{trabajador} from 'src/app/01Models/trabajadores-model';
import{ApiService} from 'src/app/02Api/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departamento-edit',
  templateUrl: './departamento-edit.component.html',
  styleUrls: ['./departamento-edit.component.css']
})
export class DepartamentoEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,private apiService:ApiService) { }

  myForm: FormGroup;

  user_id : number;

  d_id: number;

  editTrabajador: trabajador = {
    id : 0,
    usuario_id : 0,
    nombres : "",
    apellidos : '',
    posicion : ''
  }

  ngOnInit(): void {

    this.d_id = Number(this.route.snapshot.paramMap.get('id'));

    this.myForm = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      posicion: new FormControl()
    });

    this.user_id = JSON.parse(localStorage.getItem('current')|| '{}')

    this.apiService.getElementByIdTrabajador(this.d_id)
    .subscribe(data => this.editTrabajador = data);
  }


  editar(): void{
    this.editTrabajador.id = this.d_id
    this.editTrabajador.usuario_id = this.user_id
    this.editTrabajador.nombres = this.myForm.get("nombres")?.value
    this.editTrabajador.apellidos = this.myForm.get("apellidos")?.value
    this.editTrabajador.posicion = this.myForm.get("posicion")?.value
    
    this.apiService.editTrabajador(this.d_id,this.editTrabajador).subscribe()
    
  }

}
