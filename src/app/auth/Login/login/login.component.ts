import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  arrayColeccionUsuario: any = [{
    data: {} as Usuario
   }];

   usuario = new FormGroup({
    correo: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) { }

  ngOnInit() {}

  login(){
    let correo = this.usuario.controls.correo.value;
    let psw = this.usuario.controls.password.value;
    this.firestoreService.consultar("elemixiUser").subscribe((resultadoConsultaTareas) => {
      this.arrayColeccionUsuario = [];
      resultadoConsultaTareas.forEach((datosUsers: any) => {
        this.arrayColeccionUsuario.push({
          data: datosUsers.payload.doc.data()
        });
        console.log(this.arrayColeccionUsuario);
      });
      let user = this.arrayColeccionUsuario.find(x => x.data.correo == correo);
      console.log(user.data.correo);
      if(user.data.passwd === psw){
        console.log("Login correcto");
        this.router.navigate(["/home"]);
      } else{
        console.log("pass erroneo")
      }
    });
  }

}
