import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Animal } from '../../interfaces/animal.interface';
import { ANIMALES } from '../../data/data.animales';
import { Refresher } from 'ionic-angular/components/refresher/refresher';
import { reorderArray } from 'ionic-angular/util/util';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo: any;
  ordenando: boolean = false;

  constructor(public navCtrl: NavController) {
    
    this.animales = ANIMALES.slice(0);  //Clonar

  }

  reproducir(animal: Animal){

    this.pausar_Audio(animal);

    if(animal.reproduciendo){
      animal.reproduciendo = false;
      return;
    }

    this.audio.src = animal.audio;

    this.audio.load();
    this.audio.play();
  
    animal.reproduciendo = true;

    this.audioTiempo = setTimeout( () => animal.reproduciendo = false, animal.duracion * 1000);
  }
 

  private pausar_Audio(animalSel:Animal){
    
    clearTimeout(this.audioTiempo);
    this.audio.pause();

    this.audio.currentTime = 0;
    
    for (let Animal  of this.animales) {
      if(Animal.nombre != animalSel.nombre){

        Animal.reproduciendo = false;
      }

    }
    
  }

  borrar(i: number){
    this.animales.splice(i,1);
  }

  refrescar( refresher: Refresher){

    console.log('inicio refresh');
  
    setTimeout(() => {
      console.log('termino refresh');
      this.animales = ANIMALES.slice(0);  //Clonar

      refresher.complete();

    }, 1500);
  }

  reordenarAnimales(indices: any){
    this.animales = reorderArray(this.animales, indices);
  }

}
