import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {ListeObjetsComponent} from './liste-objets/liste-objets.component';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {LayoutComponent} from './layout/layout.component';
import {AjouterRecetteComponent} from './ajouter-recette/ajouter-recette.component';
import {RechercherRecettesComponent} from './rechercher-recettes/rechercher-recettes.component';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {RechercherObjetComponent} from './rechercher-objet/rechercher-objet.component';
import {ListeRecettesComponent} from './liste-recettes/liste-recettes.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {AjouterObjetComponent} from './ajouter-objet/ajouter-objet.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {GetImageDirective} from './get-image.directive';
import { AccueilComponent } from './accueil/accueil.component';
import { InputRechercherObjetComponent } from './input-rechercher-objet/input-rechercher-objet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeObjetsComponent,
    LayoutComponent,
    AjouterRecetteComponent,
    RechercherRecettesComponent,
    RechercherObjetComponent,
    ListeRecettesComponent,
    AjouterObjetComponent,
    GetImageDirective,
    AccueilComponent,
    InputRechercherObjetComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ScrollingModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatMenuModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
