import { Component, OnInit } from '@angular/core';
import{trabajador} from 'src/app/01Models/trabajadores-model';
import{ApiService} from 'src/app/02Api/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-departamento-add',
  templateUrl: './departamento-add.component.html',
  styleUrls: ['./departamento-add.component.css']
})
export class DepartamentoAddComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  myForm: FormGroup;

  user_id : number;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      nombres: new FormControl(),
      apellidos: new FormControl(),
      posicion: new FormControl()
    });

    this.user_id = JSON.parse(localStorage.getItem('current')|| '{}')
  }

  newTrabajador: trabajador = {
    id : 0,
    usuario_id : 0,
    nombres : "",
    apellidos : '',
    posicion : ''
  }

  nuevo(): void{
    this.newTrabajador.usuario_id = this.user_id
    this.newTrabajador.nombres = this.myForm.get("nombres")?.value
    this.newTrabajador.apellidos = this.myForm.get("apellidos")?.value
    this.newTrabajador.posicion = this.myForm.get("posicion")?.value

    //console.log(this.newTrabajador)

    this.apiService.createTrabajador(this.newTrabajador).subscribe()


  }

}
