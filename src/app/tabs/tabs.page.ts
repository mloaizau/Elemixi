import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    private router: Router,
    public navCtrl: NavController
  ) {}

  resumen(){
    this.navCtrl.navigateRoot(["/home/tabs/resumen"])
  }

  ayuda(){
    this.navCtrl.navigateRoot(["/home/tabs/ayuda"])
  }

  ofertas(){
    this.navCtrl.navigateRoot(["/home/tabs/ofertas"])
  }


}
