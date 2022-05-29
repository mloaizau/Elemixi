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
      console.log(user.data);
      if(user.data.passwd === psw){
        await this.session.set("sessionActive", user.data);
        let ses = await this.session.get("sessionActive");
        console.log(ses);
        this.router.navigate(["/home"]);
      } else{
        console.log("pass erroneo");
      }
    });
  }

}
