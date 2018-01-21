import { Component, OnInit} from '@angular/core';
import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';
import {exitCodeFromResult} from '@angular/compiler-cli';

@Component({
  selector: 'seller',
  templateUrl: '../views/favoritos-list.html',
  providers: [FavoritoService]
})

export class ListadoFavoritosComponent implements OnInit {
  public title: string;
  public errorMessage;
  public favoritos: Favorito[];

  constructor(
    private _favoritoService: FavoritoService
  ) {
    this.title = 'Listado de marcadores';
  }
  ngOnInit() {
    console.log("FavoritosListComponent Cargado!!");
    this._favoritoService.getFavoritos().subscribe(
      result => {
        this.favoritos = result.favoritos;
        if (! this.favoritos) {
          alert("Error en el servidor");
        }
      },
      error => {
        this.errorMessage = <any>error;
        if (this.errorMessage != null) {
          console.log(this.errorMessage) ;
          alert( "Error en la peticion" );
        }
      }
    );
  }
}
