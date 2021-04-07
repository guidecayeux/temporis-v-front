import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Carte} from '../modele';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CartesService {

  constructor(
    private httpClient: HttpClient,
    private cookieSerice: CookieService
  ) { }

  public getCartes(): Observable<Carte[]> {
    return this.httpClient.get<Carte[]>(environment.url.carte.liste);
  }

  public addCarte(name: string): Observable<Carte> {
    const headers = new HttpHeaders().set('Authorization', 'OAuth ' + this.cookieSerice.get('AuthTwitch'));
    return this.httpClient.post<Carte>(environment.url.carte.ajout, {name}, {headers});
  }
}
