import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import{user} from 'src/app/01Models/user-model';
import{ApiService} from 'src/app/02Api/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private apiService:ApiService) { }

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      usuario: new FormControl(),
      correo: new FormControl(),
      contraseña: new FormControl(),
      contraseña2: new FormControl()
    });
  }

  userData : user = {
    id : 0,
    usuario: "",
    correo: "",
    contraseña: ""
  }

  onRegister(): void{
    //console.log("register");
    //
    let c1 = this.myForm.get('contraseña')?.value;
    let c2 = this.myForm.get('contraseña2')?.value;
    //console.log(c1,c2);
    if (c1 == c2){
      this.userData.usuario = this.myForm.get('usuario')?.value;
      this.userData.correo = this.myForm.get('correo')?.value;
      this.userData.contraseña = c1
      //console.log(this.userData)
      this.apiService.register(this.userData).subscribe((data:any)=>{
        this.userData = data;
        this.router.navigate(['login']);
      })
    }
  }

}
