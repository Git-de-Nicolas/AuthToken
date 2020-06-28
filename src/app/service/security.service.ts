import {Injectable} from '@angular/core';
import {User} from '../entity/user.entity';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

const FAKE_CONNECTION_MODE = true;

const TOKEN_LOCALSTORAGE_KEY = 'token';
const USER_LOCALSTORAGE_KEY = 'user';

/* Ce service gère la sécurité dans l'application par l'authentification d'un utilisateur */

@Injectable({providedIn: 'root'})

export class SecurityService {

  private user: User; // l'utilisateur connecté
  private admin: 'admin'

  // code unique qui permet de s'authentifier avec le serveur
  // (récupéré après un login)
  private token: string = null;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<any> {

    return this.http.post(environment.apiPrefix + '/login_check', {
      username: username,
      password: password
    })
      .pipe(
        // la réponse du serveur en cas de connexion avec succès : {token: 13216516515, user: {email:......}
        tap(result => {
          this.setToken(result.token, result.user);
        })
      );
  }

  setToken(token, user) {
    this.token = token;
    this.user = user;
    localStorage.setItem(TOKEN_LOCALSTORAGE_KEY, JSON.stringify(this.token));
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(this.user));
  }

  isConnected() {
    return this.token !== null;
  }

  logout() { // vide le token
    this.token = null;
    localStorage.removeItem(TOKEN_LOCALSTORAGE_KEY);
    localStorage.removeItem(USER_LOCALSTORAGE_KEY);
  }

  getCurrentUser(): User {
    return this.user;
  }

  getToken() {
    return this.token;
  }

  /**
   * Vérifie si un token/user est dans le localstorage et si oui les enregistre
   */
  restoreConnection() {
    const token = localStorage.getItem(TOKEN_LOCALSTORAGE_KEY);
    const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    if (this.token && this.user) {    // sans this
      this.token = JSON.parse(token); // sans this
      this.user = JSON.parse(user);
    }
  }
}
