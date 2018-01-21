import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { ListadoFavoritosComponent } from './components/listado-favoritos.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoFavoritosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ListadoFavoritosComponent
  ]
})
export class AppModule {}

