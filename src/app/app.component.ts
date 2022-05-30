import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SessionService } from "./services/session.service";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public session: any;

  constructor(
    public menuCtrl: MenuController,
    private _session: SessionService,
    private route: Router
  ) {
    this.obtenerSession();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  ionWillOpen() {
    this.obtenerSession();
  }

  async obtenerSession(){
    this.session = await this._session.get("sessionActive");
  }

  enrutamiento(url){
    this.route.navigate(["/home/tabs/"+url]);
    this.closeMenu();
  }

  cerrarSesion(){
    this._session.remove("sessionActive");
    this.closeMenu();
  }
}
