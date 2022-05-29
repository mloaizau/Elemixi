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
  }

  ngOnInit(){
    this.obtenerSession();
  }

  async obtenerSession(){
    this.session = await this._session.get("sessionActive");
  }

  async ionViewWillEnter(){
    if(!this.session){
      this.obtenerSession();
    }
  }
}
