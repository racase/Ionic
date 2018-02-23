import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.mutante = this.navParams.get("person");
  }

}
