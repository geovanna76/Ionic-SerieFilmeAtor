import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ISeries } from '../model/iSerie';
import { NgFor } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgFor,NgIf]
})
export class Tab2Page {

  constructor(
    public router:Router,
    public toastController:ToastController,
    public alertController:AlertController
  ) {}

  listaSeries:ISeries[] =  [
    {
      nome: 'The 100',
      lancamento: '2014',
      generos: ['Sci-Fy', 'Fantasia', 'Ação'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg',
      classificacao: 10,
      temporadas: 7
    },
    {
      nome: 'Greys Anatomy',
      lancamento: '2005',
      generos: ['Drama', 'Medico'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/diS4zWXohKIp9VuN9sJDRrqe5en.jpg',
      classificacao: 8,
      temporadas: 20

    },
    {
      nome: 'Pretty Little Liars',
      lancamento: '2010',
      generos: ['Drama', 'Misterio'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lntOFDrvVPBAULcrE8NoUlExa11.jpg',
      classificacao: 8,
      temporadas: 7

    },
    {
      nome: 'Gypsy',
      lancamento: '2017',
      generos: ['Drama', 'Psicologico'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/dNiI4TdbTb9Mc8ACKQnW9gHCxGZ.jpg',
      classificacao: 8,
      temporadas: 2

    },
    {
      nome: 'Orphan Black',
      lancamento: '2013',
      generos: ['Drama', 'Ficção Cientifica', 'Fantasia'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/xKo79AxtabAFoJTqz4RuC3APND4.jpg',
      classificacao: 8,
      temporadas: 6

    },
  ];
  exibirSerie(serie:ISeries){
    const NavigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'],NavigationExtras);
  }


  async exibirAlertaFavorito(serie: ISeries) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar essa serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
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

