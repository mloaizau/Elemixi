import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../../services/session.service";
@Component({
  selector: 'app-resumen',
  templateUrl: 'resumen.component.html',
  styleUrls: ['resumen.component.scss']
})
export class ResumenPage implements OnInit {

  public session: any;

  constructor(
    private _session: SessionService
  ) {
    console.log("constructor resumen");
  }

  ngOnInit(){
    console.log("oninit resumen");
    this.obtenerSession();
  }

  async obtenerSession(){
    console.log("obtener session");
    this.session = await this._session.get("sessionActive");
    console.log(this.session)
  }

  async ionViewWillEnter(){
    if(!this.session){
      this.obtenerSession();
    }
  }
}
