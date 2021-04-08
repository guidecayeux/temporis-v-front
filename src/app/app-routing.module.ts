import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListeObjetsComponent} from './liste-objets/liste-objets.component';
import {LayoutComponent} from './layout/layout.component';
import {AjouterRecetteComponent} from './ajouter-recette/ajouter-recette.component';
import {RechercherRecettesComponent} from './rechercher-recettes/rechercher-recettes.component';
import {RechercherObjetComponent} from './rechercher-objet/rechercher-objet.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AuthGuard} from './auth/auth-guard.service'; // CLI imports router

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'accueil', component: AccueilComponent},
      {path: 'rechercher-objet', component: RechercherObjetComponent},
      {path: 'rechercher-recettes', component: RechercherRecettesComponent},
      {path: 'ajouter-recette', component: AjouterRecetteComponent, canActivate: [AuthGuard]},
      {path: 'objets', component: ListeObjetsComponent},
      {path: '**', redirectTo: 'accueil'}
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
