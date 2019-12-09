import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { ListagemFilmesComponent } from './listagem-filmes/listagem-filmes.component';
import { CatalogFilmesService } from './catalog-filmes.service';

@NgModule({
  declarations: [
    AppComponent,
    ListagemFilmesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CatalogFilmesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
