import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Animal } from '../../interfaces/animal.interface';
import { ANIMALES } from '../../data/data.animales';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  animales:Animal[] = [];
  audio = new Audio();
  audioTiempo: any;

  constructor(public navCtrl: NavController) {
    
    this.animales = ANIMALES.splice(0);  //Clonar

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
  



}
