import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  registroUsuario: Usuario;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router
  ) {
    this.registroUsuario = {} as Usuario;
  }

  ngOnInit() {}

  registro(){
    this.firestoreService.insertar("elemixiUser", this.registroUsuario).then(() => {
      console.log('Registro creado correctamente!');
      this.registroUsuario = {} as Usuario;
      this.router.navigate(["/registro/mensaje-confirmacion"]);
    }, (error) => {
      console.error(error);
    });
  }

}
