import { Component } from '@angular/core';
import { NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

 Selectgroceries: any;
 life: number = 5;
 valor: number = 0;


  groceries = [{
    id:1,
    color: 'primary',
    name: 'azul',
  },
  {
    id:2,
    color: 'danger',
    name: 'rojo',
  },
  {
    id:3,
    color: 'secondary',
    name: 'verde',
  }
]


  constructor(public navCtrl: NavController, public alertCtrl:AlertController) {

  
  this.tagAleatorio();

  }


  tagAleatorio(){
    this.Selectgroceries = this.groceries[Math.floor(Math.random()*3)]
  }



  chooseColor(color) {
    if(this.Selectgroceries.name == color.name){
      console.log("color correcto")
      this.valor +=10
      this. tagAleatorio();
      if(this.valor == 50){
        this.dataAlert('Respuesta','Ganaste!!!...');
      }
    }else{
      //this.dataAlert('Respuesta','Color Incorrecto... Vuelve a intentar');
      this.life-=1;
      if(this.life == 0){
        this.dataAlert('Respuesta','Vuelve a intentar');
        //this.volverJuagr();
      }
    }
  }

  dataAlert(title,message) {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  volverJuagr(){
    this.tagAleatorio();
    this.valor = 0;
    this.life = 5;
  }
  
}
