import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ShoopComponent } from './shoop/shoop.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColecaoComponent } from './colecao/colecao.component';
import { CamisetaBasicaPretaComponent } from './camiseta-basica-preta/camiseta-basica-preta.component';
import { CarrinhoCompraComponent } from './carrinho-compra/carrinho-compra.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    ShoopComponent,
    SobreComponent,
    InicioComponent,
    ColecaoComponent,
    CamisetaBasicaPretaComponent,
    CarrinhoCompraComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
