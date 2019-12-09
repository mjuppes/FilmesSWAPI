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

    return this.http.get(urlSearch).map(res => res.json());
  }
}
