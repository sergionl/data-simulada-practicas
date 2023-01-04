import { Component, OnInit } from '@angular/core';
import{trabajador} from 'src/app/01Models/trabajadores-model';
import{ApiService} from 'src/app/02Api/api.service';

@Component({
  selector: 'app-departamento-list',
  templateUrl: './departamento-list.component.html',
  styleUrls: ['./departamento-list.component.css']
})
export class DepartamentoListComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  trabajadores: trabajador[] = [];
  id: string;

  ngOnInit(): void {
    this.id = JSON.parse(localStorage.getItem('current')|| '{}')
    
    //console.log(idtemp)
    this.apiService.getListFkTrabajador(Number(this.id))
    .subscribe(data => this.trabajadores = data)

  }

  edit(id:number){
    
  }

  deleteFromArray(id:number):void{
    this.apiService.deleteTrabajador(id).subscribe()
    window.location.reload();
  }

}
