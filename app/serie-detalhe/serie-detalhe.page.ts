import { ISeries } from './../model/iSerie';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { get } from 'http';

@Component({
  selector: 'app-serie-detalhe',
  templateUrl: './serie-detalhe.page.html',
  styleUrls: ['./serie-detalhe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SerieDetalhePage implements OnInit {
serie: any;
  constructor(
    private route: ActivatedRoute,
    private Router: Router
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.Router.getCurrentNavigation();
      if(getNav?.extras.state){
        this.serie = getNav.extras.state['paramSerie'];
      }
    });
  }

}
