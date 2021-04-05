import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListeObjetsComponent} from './liste-objets/liste-objets.component';
import {AdminComponent} from './admin/admin.component';
import {LayoutComponent} from './layout/layout.component';
import {AjouterRecetteComponent} from './ajouter-recette/ajouter-recette.component';
import {RechercherRecettesComponent} from './rechercher-recettes/rechercher-recettes.component';
import {RechercherObjetComponent} from './rechercher-objet/rechercher-objet.component'; // CLI imports router

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'rechercher-objet', component: RechercherObjetComponent},
      {path: 'rechercher-recettes', component: RechercherRecettesComponent},
      {path: 'ajouter-recette', component: AjouterRecetteComponent},
      {path: 'objets', component: ListeObjetsComponent},
      {path: 'admin', component: AdminComponent},
      {path: '**', redirectTo: 'rechercher-objet'}
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
