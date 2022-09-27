import { ShoopComponent } from './shoop/shoop.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColecaoComponent } from './colecao/colecao.component';
import { CarrinhoCompraComponent } from './carrinho-compra/carrinho-compra.component';
import { CamisetaBasicaPretaComponent } from './camiseta-basica-preta/camiseta-basica-preta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{path: '', redirectTo: 'inicio', pathMatch: 'full'},

{path: 'shoop', component: ShoopComponent},
{path: 'sobre', component: SobreComponent},
{path: 'inicio', component: InicioComponent},
{path: 'colecao', component: ColecaoComponent},
{path: 'camisetabasicapreta', component: CamisetaBasicaPretaComponent},
{path: 'carrinhoDeCompra', component: CarrinhoCompraComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],









exports: [RouterModule]
})
export class AppRoutingModule { }
