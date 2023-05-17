import { IAtores } from './../model/IAtores';
import { Component } from '@angular/core';
import { IonicModule, AlertController, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { NgIf } from '@angular/common';
import { NgFor } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent,NgIf, NgFor],
})
export class Tab3Page {
  constructor(
    public router:Router,
    public alertController: AlertController,
    public toastController:ToastController
  ) {}


  listaAtores:IAtores[] = [
    {
      nome:'Tatiana Maslany',
      idade: '32 anos',
      signo: 'Virgem',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/c0VY8bB10l2oJvEnDmSxiEHNN1g.jpg',
      favorito:false,
      obra:['Nos Bastidores de She-Hulk: A Advogada','Orphan Black']
    },
    {
      nome:'Leonardo DiCaprio',
      idade: '48 anos',
      signo: 'Escorpião',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/wo2hJpn04vbtmh0B9utCFdsQhxM.jpg',
      favorito:false,
      obra:['Titanic','The Last Dance ']
    },
    {
      nome:'Jenna Ortega',
      idade: '20 anos',
      signo: 'Libra',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg',
      favorito:false,
      obra:['You','Wandinha']
    },
    {
      nome:'Evelyne Brochu',
      idade: '39 anos',
      signo: 'Escorpião',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/11rEHdNfqH6WLJDufd1H0MSIrP6.jpg',
      favorito:false,
      obra:['Paris Police 1905','Orphan Black','French Girl']
    },

  ];

  exibirAtor(ator:IAtores){
    const NavigationExtras: NavigationExtras = {state:{paramAtor:ator}};
    this.router.navigate(['ator-detalhe'],NavigationExtras);
  }


  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar essa serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }


  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }

}
