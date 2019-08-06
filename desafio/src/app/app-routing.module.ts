//modulos del router de angular
import { RouterModule, Routes } from '@angular/router';
import { NgModule }  from '@angular/core';

//importar componentes
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';

//array de rutas
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'producto/:id', component: ProductoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

//exportar modulo del router
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}