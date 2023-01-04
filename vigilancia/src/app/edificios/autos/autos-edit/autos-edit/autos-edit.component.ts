import { Component, OnInit } from '@angular/core';
import{tarea} from 'src/app/01Models/tarea.model';
import{ApiService} from 'src/app/02Api/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-autos-edit',
  templateUrl: './autos-edit.component.html',
  styleUrls: ['./autos-edit.component.css']
})
export class AutosEditComponent implements OnInit {

  constructor(private route: ActivatedRoute,private apiService:ApiService) { }

  myForm: FormGroup;

  user_id : number;

  d_id: number;

  editTarea: tarea = {
    id : 0,
    usuario_id : 0,
    titulo : "",
    descripcion : '',
    fecha_entrega : ''
  }

  ngOnInit(): void {
    this.d_id = Number(this.route.snapshot.paramMap.get('id'));

    this.myForm = new FormGroup({
      titulo: new FormControl(),
      descripcion: new FormControl(),
      fecha_entrega: new FormControl()
    });

    this.user_id = JSON.parse(localStorage.getItem('current')|| '{}')

    this.apiService.getElementByIdTarea(this.d_id)
    .subscribe(data => this.editTarea = data);
  }

  editar(): void{
    this.editTarea.id = this.d_id
    this.editTarea.usuario_id = this.user_id
    this.editTarea.titulo = this.myForm.get("titulo")?.value
    this.editTarea.descripcion = this.myForm.get("descripcion")?.value
    this.editTarea.fecha_entrega = this.myForm.get("fecha_entrega")?.value
    
    this.apiService.editTarea(this.d_id,this.editTarea).subscribe()
    
  }

}
