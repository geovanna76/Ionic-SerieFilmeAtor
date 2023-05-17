
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IFilme } from '../model/IFilmes';
import { Router  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.page.html',
  styleUrls: ['./filme-detalhe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class FilmeDetalhePage implements OnInit {
  filme: any;

  constructor(
    private route: ActivatedRoute, private router:Router
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state) {
        this.filme = getNav?.extras.state['paramFilme'];
      }
    });
  }

}
