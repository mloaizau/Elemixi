import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/usuario';
import { FirestoreService } from 'src/app/services/firestore.service';
import { Router } from '@angular/router';
import { RandommerService } from 'src/app/services/randommer.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  registroUsuario: Usuario;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private randommer: RandommerService
  ) {
    this.registroUsuario = {} as Usuario;
  }

  ngOnInit() {}

  async registro(){
    const numero = await this.randommer.getRandomPhone();
    this.registroUsuario.telefono = numero;
    this.firestoreService.insertar("elemixiUser", this.registroUsuario).then(() => {
      console.log('Registro creado correctamente!');
      this.registroUsuario = {} as Usuario;
      this.router.navigate(["/registro/mensaje-confirmacion"]);
    }, (error) => {
      console.error(error);
    });
  }

}
