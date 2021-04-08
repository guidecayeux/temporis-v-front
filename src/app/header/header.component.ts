import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {User} from '../modele';
import {AuthService} from '../auth/auth.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public user: User;
  public isAdmin = false;
  public redirectUri = environment.url.twitch.redirect_uri;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment: string) => {
      const bearer = new URLSearchParams(fragment).get('access_token');
      if (bearer)  {
        this.authService.login(bearer).subscribe(user => {
          this.user = user;
          this.router.navigate(['/']);
        }, () => {
          this.router.navigate(['/']);
        });
      } else {
        this.authService.getTwitchUser().subscribe(user => {
          this.user = user;
        });
      }
    });

    this.authService.adminSubject.asObservable().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    });
  }

  deconnexion(): void {
    this.authService.deconnexion().subscribe(() => {
      this.user = undefined;
    });
  }
}
