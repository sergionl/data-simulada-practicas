import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{loginForm,user} from 'src/app/01Models/user-model';
import{ApiService} from 'src/app/02Api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,
    private apiService:ApiService
    ) { }

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      correo: new FormControl(),
      contraseña: new FormControl()
    });
  }

  userData : user = {
    id : 0,
    usuario: "",
    correo: "",
    contraseña: ""
  }

  login : loginForm = {
    correo: "",
    contraseña : ""
  }

  tryLogin(): void{
    //console.log("login");
    //this.router.navigate(['dashboard/inicio']);
    this.login.correo = this.myForm.get('correo')?.value;
    this.login.contraseña = this.myForm.get('contraseña')?.value;

    if (this.login.correo != "" && this.login.contraseña != ""){
      this.apiService.login(this.login).subscribe((data:any)=>{
        this.userData = data;
        //console.log(data)
        //console.log(this.userData)
        //console.log(data[0].id)
        localStorage.setItem('current',JSON.stringify(data[0].id))
        //let tmp: string = JSON.parse(localStorage.getItem('current')|| '{}');

        //console.log(tmp)
        this.router.navigate(['dashboard/inicio']);
      })
    }
    
  }

}
