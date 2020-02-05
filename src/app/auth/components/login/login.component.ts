import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  nombre: string;
  password: string;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    if(this.nombre && this.password){
      localStorage.setItem('nombre', this.nombre);
      alert('logueo exitoso')
      this.router.navigate(['/home'])
    }else{
      alert('error por favor valide que los campos no esten vacios')
    }
  }
}
