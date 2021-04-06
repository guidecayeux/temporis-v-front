import {Injectable} from '@angular/core';
import {Carte, Objet} from './modele';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ObjetsService {

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {
  }

  public getObjets(): Observable<Objet[]> {
    return this.httpClient.get<Objet[]>(environment.url.objets.liste);
  }

  public getObjet(id): Observable<Objet> {
    return this.httpClient.get<Objet>(environment.url.objets.unitaire + id);
  }

  public autoComplete(name): Observable<Objet[]> {
    return this.httpClient.get<Objet[]>(environment.url.objets.autocomplete + name);
  }

  public addObjet(objet: Objet): Observable<Objet> {
    const headers = new HttpHeaders().set('Authorization', 'OAuth ' + this.cookieService.get('AuthTwitch'));
    return this.httpClient.post<Objet>(environment.url.objets.ajout, objet, {headers});
  }

}
