import { Component } from '@angular/core';
import { IonicModule, ToastController, AlertController } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IFilme } from '../model/IFilmes';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NavigationExtras } from '@angular/router';
import {Router} from '@angular/router';

  
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgFor, NgIf],
})
export class Tab1Page {
  constructor(
    public router: Router,
    public toastController: ToastController,
    public alertController:AlertController )
    {}



  listaFilmes : IFilme[] = [
    {
      nome: 'As Vantagens de Ser Invisível',
      lancamento: '2012',
      generos: ['Romance','Drama'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/pUYWbq0I6oCrysxuL0OCxwB8wFp.jpg',
      classificacao: 10
      },
    {
      nome: 'O Gato das Botas: O Último Desejo ',
      lancamento: '2022',
      generos: ['Animação','Familia','Fantasia'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/i0tScFVNCcgDzz9AgjYd3LDXGTO.jpg',
      classificacao: 5

    },
    {
      nome: 'Your Name',
      lancamento: '2016',
      generos: ['Romance', 'Drama'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/7bAtBUQRC1M4zaIlihesBPTAJ8a.jpg',
      classificacao: 7

    },
    {
      nome: 'Avatar: O Caminho da Água',
      lancamento: '2022',
      generos: ['Ficção Cientifica', 'Aventura', 'Ação'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/mbYQLLluS651W89jO7MOZcLSCUw.jpg',
      classificacao: 8

    },
    {
      nome: 'Evil Dead Rise ',
      lancamento: '2023',
      generos: ['Terror','Suspense'],
      favorito: false,
      cartaz:'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/5E4nVa3dXTHG2zx9iO7b0UIMsa7.jpg',
      classificacao: 9

    },
  ];


  exibirFilme(filme: IFilme){
    const NavigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],NavigationExtras);
  }




  //metodo async para favoritar filme
  //alert
  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }


  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }


}
