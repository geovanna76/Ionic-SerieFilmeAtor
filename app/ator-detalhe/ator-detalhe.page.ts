import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IAtores } from '../model/IAtores';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ator-detalhe',
  templateUrl: './ator-detalhe.page.html',
  styleUrls: ['./ator-detalhe.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AtorDetalhePage implements OnInit {
ator:any;
  constructor(
    private route: ActivatedRoute, private router:Router
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if(getNav?.extras.state) {
        this.ator = getNav?.extras.state['paramAtor'];
      }
    });
  }

}
