import { Component, OnInit } from '@angular/core';
import { CatalogFilmesService } from 'app/catalog-filmes.service';

@Component({
  selector: 'app-listagem-filmes',
  templateUrl: './listagem-filmes.component.html',
  styleUrls: ['./listagem-filmes.component.css']
})
export class ListagemFilmesComponent implements OnInit {

  listaFilmes: Array<any>; 
  constructor(private catalogFilmesService : CatalogFilmesService) { }

  ngOnInit() {
    this.listar('');
  }

  listar(param) {

    this.catalogFilmesService.listar(param).subscribe(dados => this.listaFilmes = dados);

  }

}
