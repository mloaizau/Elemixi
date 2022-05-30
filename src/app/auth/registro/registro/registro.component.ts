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
  isErrorEmail: boolean;
  isValid: boolean;

  constructor(
    private firestoreService: FirestoreService,
    private router: Router,
    private randommer: RandommerService,
  ) {
    this.registroUsuario = {} as Usuario;
  }

  ngOnInit() {
  }

  async registro(){
    const numero = "+56 80 839 6137";
    //const numero = await this.randommer.getRandomPhone(); //Problemas de CORS
    this.registroUsuario.telefono = numero;
    this.firestoreService.insertar("elemixiUser", this.registroUsuario).then(() => {
      this.registroUsuario = {} as Usuario;
      this.router.navigate(["/registro/mensaje-confirmacion"]);
    }, (error) => {
      console.error(error);
    });
  }

  ValidateEmail(mail){
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
      this.isErrorEmail = false;
      this.validadorGlobal();
    } else{
      this.isErrorEmail = true;
    }
  }

  validadorGlobal(){
    if(this.registroUsuario.nombre !== "" && this.registroUsuario.passwd !== "" && !this.isErrorEmail){
      this.isValid = true;
    } else{
      this.isValid = false;
    }
  }



}
