import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ObjetComponent} from './main/objet.component';
import {AdminComponent} from './admin/admin.component';
import {LayoutComponent} from './layout/layout.component';
import {AjouterRecetteComponent} from './ajouter-recette/ajouter-recette.component';
import {RecettesComponent} from './recettes/recettes.component'; // CLI imports router

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'objets', component: ObjetComponent},
      {path: 'recettes', component: RecettesComponent},
      {path: 'ajouter-recette', component: AjouterRecetteComponent},
      {path: 'admin', component: AdminComponent},
      {path: '**', redirectTo: 'objets'}
    ]
  }
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
