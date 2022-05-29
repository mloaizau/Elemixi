import { Component } from '@angular/core';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-promo',
  templateUrl: 'promociones.page.html',
  styleUrls: ['promociones.page.scss']
})
export class PromocionesPage {

  public productos: any;

  constructor(
    private _storeService: StoreService
  ) { }

  async getStore(){
    this.productos = await this._storeService.getStore();
  }

  async ionViewWillEnter(){
    if(!this.productos){
      this.getStore();
    }
  }

}
