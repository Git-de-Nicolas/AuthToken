import {Component, OnInit} from '@angular/core';
import {SecurityService} from '../../service/security.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  errorMessage: string;

  constructor(private securityService: SecurityService,
              private router: Router,
              private ngxLoader:NgxUiLoaderService) {
  }

  // si on est connecté en arrivant sur cette route, on se déconnecte avant tout
  ngOnInit(): void {
    if (this.securityService.isConnected()) {
      this.securityService.logout();
    }
  }

  login() {
    this.ngxLoader.start();
    this.securityService.login(this.username, this.password).subscribe(() => {
          this.router.navigate(['/']);
          this.ngxLoader.stop();
        },
        error => {
          if (error.status == 401)
            // erreur de connexion
          {
            this.errorMessage = 'Identifiants incorrects';
          } else {
            this.errorMessage = 'Une erreur est survenue';
            console.error(error);
          }
        });
  }

}
