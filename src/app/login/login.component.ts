import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<LoginComponent>) { }

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',
      [Validators.required,
      Validators.pattern(
        /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
      )]),
        password: new FormControl('', Validators.required)
  })



  onSubmit() {
    let cliente: string = "admin@gmail.com";
    let password: string = "admin";
    if(this.usuarioLogin.value.usuario === cliente || this.usuarioLogin.value.password === password){
      console.log(this.usuarioLogin.value)
      this.router.navigate(['/cliente']);
      this.dialogRef.close();
    }else{
      this.router.navigate(['/']);
      this.dialogRef.close();
    }
  }

}
