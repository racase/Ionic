import { Pagina3Page } from './../pagina3/pagina3';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  mutantes: any[] = [

    {
      nombre:"Magneto",
      poder: "Controlar metales"
    },
    {
      nombre:"Batman",
      poder: "Fuerza suprema"
    },
    {
      nombre:"Profesor X",
      poder: "Pderes Psiquicos"
    },
    {
      nombre:"Gambito",
      poder: "Cargar objetos"
    }
  ] ;

  constructor(public navCtrl: NavController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Pagina2Page');
  }

  irPagina3(mutante: any){
    
    this.navCtrl.push(Pagina3Page, { 'person': mutante} );
  }

}
