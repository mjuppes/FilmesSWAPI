import { Component, OnInit } from '@angular/core';
import { CatalogFilmesService } from './catalog-filmes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers : [CatalogFilmesService] ,

  styleUrls: ['./assets/web/assets/mobirise-icons/mobirise-icons.css',
  './assets/bootstrap/css/bootstrap.min.css',
  './assets/bootstrap/css/bootstrap-grid.min.css',
  './assets/bootstrap/css/bootstrap-reboot.min.css',
  './assets/tether/tether.min.css',
  './assets/dropdown/css/style.css',
  './assets/theme/css/style.css',
  './assets/mobirise/css/mbr-additional.css',
  ]
})

export class AppComponent implements OnInit {
  title = 'Lista de Filmes';

  arrayObj = [];
  getData :  Object[] = [];

  //planos: Object[] = [];

  constructor(private catalogFilmesService : CatalogFilmesService){}

  onSearchGetFilms(param) {

    /*
        let valor = this.catalogFilmesService.listar(param).toPromise().then(data => {
          this.arrayObj.push(data);
        });

        this.getData = this.catalogFilmesService.listar(param);
    */
   
   let valor = this.catalogFilmesService.listar(param).subscribe(planos => {
    this.getData = planos;
    
  }, erro => console.log(erro));

    /*let valor = this.catalogFilmesService.listar(param).toPromise().then(data => {
      this.arrayObj.push(data);
    });*/
    console.log(this.arrayObj);
    //this.getData = this.arrayObj;

  }
  ngOnInit() {
    this.onSearchGetFilms('');
  }
}
################################################

import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogFilmesService {

  urlFilme = 'https://swapi.co/api/films/';
  items = [];

  constructor(private http: Http) { }
  listar(param) {

    var urlSearch = (param) ? this.urlFilme +'?search='+param : this.urlFilme;
    
    //var urlSearch = this.urlFilme;
    //var urlSearch = 'https://swapi.co/api/films/?search=A New Hope';
  
    return this.http.get(urlSearch).map(res => res.json());


  }
}

