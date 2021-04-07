import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../modele';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private cookieService: CookieService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      const bearer = new URLSearchParams(fragment).get('access_token');
      if (bearer)  {
        this.cookieService.set('AuthTwitch', bearer);
        this.getTwitchUser(bearer);
        this.router.navigate(['/']);
      } else {
        this.getTwitchUser(this.cookieService.get('AuthTwitch'));
      }
    });
  }

  getTwitchUser(bearer): void {
    const headers = new HttpHeaders().set('Authorization', 'OAuth ' + bearer);
    this.httpClient.get<User>('https://id.twitch.tv/oauth2/validate', {headers}).subscribe(user => {
      console.log('user', user);
      this.user = user;
    }, (err) => {
      console.log('err', err);
    });
  }

  deconnexion(): void {
     this.httpClient.post('https://id.twitch.tv/oauth2/revoke?client_id=rtob0x5m8rl2ul5vh695p9y663ziui&token=' + this.cookieService.get('AuthTwitch'), '').subscribe(value => {
       this.user = undefined;
       this.cookieService.set('AuthTwitch', '');
     }, error => {

     });
  }
}
