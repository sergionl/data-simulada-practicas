import { Component, OnInit } from '@angular/core';
import{ApiService} from 'src/app/02Api/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{tarea} from 'src/app/01Models/tarea.model';
@Component({
  selector: 'app-autos-add',
  templateUrl: './autos-add.component.html',
  styleUrls: ['./autos-add.component.css']
})
export class AutosAddComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  myForm: FormGroup;

  user_id : number;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),
      fecha_entrega: new FormControl()
    });

    this.user_id = JSON.parse(localStorage.getItem('current')|| '{}')
  }

  newTarea: tarea = {
    id : 0,
    usuario_id : 0,
    titulo : "",
    descripcion : '',
    fecha_entrega : ''
  }

  nuevo(): void{
    this.newTarea.usuario_id = this.user_id
    this.newTarea.titulo = this.myForm.get("titulo")?.value
    this.newTarea.descripcion = this.myForm.get("descripcion")?.value
    this.newTarea.fecha_entrega = this.myForm.get("fecha_entrega")?.value

    //console.log(this.newTrabajador)

    this.apiService.createTarea(this.newTarea).subscribe()


  }

}
