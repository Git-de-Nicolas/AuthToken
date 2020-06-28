import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {SecurityService} from '../service/security.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(private securitySecurity: SecurityService, private router: Router) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (this.securitySecurity.isConnected()) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + this.securitySecurity.getToken()
        }
      });
    }

    // optionnel (remplace la ligne d'avant)gérer les erreur "non autorisée"
    return next.handle(request).pipe(
      catchError(error => {
        if (error.status === 401) { // not authorized
          this.securitySecurity.logout();
          this.router.navigate(['/login_check']);
        }
        return throwError(error);
      })
    );
  }
}
