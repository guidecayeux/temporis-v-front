import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Objet, Recette, RecetteQuery} from '../modele';
import {environment} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {

  constructor(
    private httpClient: HttpClient,
    private cookieSerice: CookieService
  ) {

  }

  public getRecettes(query: RecetteQuery): Observable<Objet[]> {
    return this.httpClient.post<Objet[]>(environment.url.recette.liste, query);
  }

  public ajoutRecette(recette: Recette): Observable<void> {
    const headers = new HttpHeaders().set('Authorization', 'OAuth ' + this.cookieSerice.get('AuthTwitch'));
    return this.httpClient.post<void>(environment.url.recette.ajout, recette, {headers});
  }
}
