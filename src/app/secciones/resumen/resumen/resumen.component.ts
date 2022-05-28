import { Component, OnInit } from '@angular/core';
import { SessionService } from "../../../services/session.service";
import { RandommerService } from 'src/app/services/randommer.service';
@Component({
  selector: 'app-resumen',
  templateUrl: 'resumen.component.html',
  styleUrls: ['resumen.component.scss']
})
export class ResumenPage implements OnInit {

  public session: any;
  public random: any;

  constructor(
    private _session: SessionService,
    private randommer: RandommerService
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

  ionViewWillEnter(){
    this.randommer.getRandomPhone();
    console.log("ionViewWillEnter");
    console.log(this.session);
    if(!this.session){
      this.obtenerSession();
    }
  }
}
