import { Component, OnInit } from '@angular/core';
import { Usuario } from "../../../interface/usuario";
import { FirestoreService } from 'src/app/services/firestore.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from "../../../services/session.service";

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

  isError: boolean;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private session: SessionService
  ) { }

  ngOnInit() {}

  login(){
    let correo = this.usuario.controls.correo.value;
    let psw = this.usuario.controls.password.value;
    this.firestoreService.consultar("elemixiUser").subscribe(async (resultadoConsultaTareas) => {
      this.arrayColeccionUsuario = [];
      resultadoConsultaTareas.forEach((datosUsers: any) => {
        this.arrayColeccionUsuario.push({
          data: datosUsers.payload.doc.data()
        });
      });
      let user = this.arrayColeccionUsuario.find(x => x.data.correo == correo);
      if(!user){
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 5000);
        return;
      }
      if(user.data.passwd === psw){
        await this.session.set("sessionActive", user.data);
        this.router.navigate(["/home"]);
      } else{
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 5000);
      }
    });
  }

}
