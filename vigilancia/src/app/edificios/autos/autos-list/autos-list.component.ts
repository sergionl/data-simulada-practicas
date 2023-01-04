import { Component, OnInit } from '@angular/core';
import{tarea} from 'src/app/01Models/tarea.model';
import{ApiService} from 'src/app/02Api/api.service';

@Component({
  selector: 'app-autos-list',
  templateUrl: './autos-list.component.html',
  styleUrls: ['./autos-list.component.css']
})
export class AutosListComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  tareas: tarea[] = [];
  id: string;

  ngOnInit(): void {
    this.id = JSON.parse(localStorage.getItem('current')|| '{}')
    
    //console.log(idtemp)
    this.apiService.getListFkTarea(Number(this.id))
    .subscribe(data => this.tareas = data)
  }

  edit(id:number){
    
  }

  deleteFromArray(id:number):void{
    this.apiService.deleteTarea(id).subscribe()
    window.location.reload();
  }

}
