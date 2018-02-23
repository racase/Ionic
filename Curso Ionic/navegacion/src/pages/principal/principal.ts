import { Pagina2Page } from './../pagina2/pagina2';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  pagina2:any = Pagina2Page;

  constructor(public navCtrl: NavController) {
  }

  navegarPagina() : void{
      this.navCtrl.push(Pagina2Page);
  }


}
