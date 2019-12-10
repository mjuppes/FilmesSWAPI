import { Component, OnInit } from '@angular/core';
import { CatalogFilmesService } from './catalog-filmes.service';
import { FormsModule } from '@angular/forms';



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
  getData :  Object[] = [];
  txt_consulta : string;

  constructor(private catalogFilmesService : CatalogFilmesService){}

  onSearchGetFilms(param) {

    let valor = this.catalogFilmesService.listar(param).subscribe(planos => {
      this.getData = planos;
    }, erro => console.log(erro));
  }

  searchFilm(){
    this.onSearchGetFilms(this.txt_consulta.valueOf());
    
  }
  ngOnInit() {
    this.onSearchGetFilms('');
  }
}
