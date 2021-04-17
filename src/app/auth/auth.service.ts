import { Injectable } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../modele';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin = false;
  adminSubject = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  isAdmin(): boolean {
    return this.admin;
  }

  login(bearer): Observable<User>{
    this.cookieService.set('AuthTwitch', bearer);
    return this.getTwitchUser(bearer);
  }

  getTwitchUser(bearer?: string): Observable<User> {
    const headers = new HttpHeaders().set('Authorization', 'OAuth ' + (bearer ? bearer : this.cookieService.get('AuthTwitch')));
    return this.httpClient.get<User>('https://id.twitch.tv/oauth2/validate', {headers}).pipe(
      tap(user => {
        if (user?.login && !this.isAdmin()) {
          this.httpClient.get<void>(environment.url.auth.authorization, {headers}).subscribe(() => {
              this.admin = true;
              this.adminSubject.next(true);
            });
        }
      })
    );
  }

  deconnexion(): Observable<void> {
    return this.httpClient.post<void>('https://id.twitch.tv/oauth2/revoke?client_id=rtob0x5m8rl2ul5vh695p9y663ziui&token=' + this.cookieService.get('AuthTwitch'), '').pipe(
      tap(() => {
        this.cookieService.set('AuthTwitch', '');
        this.admin = false;
        this.adminSubject.next(false);
      })
    );
  }
}
