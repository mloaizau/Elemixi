import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  registroUsuario: Usuario;

  constructor(
    private firestoreService: FirestoreService
  ) {
    this.registroUsuario = {} as Usuario;
  }

  ngOnInit() {}

  registro(){
    this.firestoreService.insertar("elemixiUser", this.registroUsuario).then(() => {
      console.log('Registro creado correctamente!');
      this.registroUsuario = {} as Usuario;
    }, (error) => {
      console.error(error);
    });
  }

}
