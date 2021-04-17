import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Log} from '../modele';
import {environment} from '../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(
    private httpClient: HttpClient,
    private cookieSerice: CookieService
  ) { }

  public getLogs(): Observable<Log[]> {
    const headers = new HttpHeaders().set('Authorization', 'OAuth ' + this.cookieSerice.get('AuthTwitch'));
    return this.httpClient.get<Log[]>(environment.url.logs.liste, {headers});
  }
}
