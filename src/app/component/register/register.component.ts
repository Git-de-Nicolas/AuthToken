import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../service/users.service';
import {User} from '../../entity/user.entity';
import {SecurityService} from '../../service/security.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  formSubmitted: Boolean = false;

  constructor(private userService: UsersService,
              private securityService: SecurityService,
              private router: Router,
              private ngxLoader: NgxUiLoaderService) {
  }

  // si on est connecté en arrivant sur cette route, on se déconnecte avant tout
  ngOnInit(): void {
    if (this.securityService.isConnected()) {
      this.securityService.logout();
    }
  }

  addUser() {
    this.formSubmitted = true;
    this.ngxLoader.start();
    this.userService.addUser(this.user).subscribe(() => {
      Swal.fire('Compte utilisateur crée !');
      this.router.navigate(['/']);
      this.ngxLoader.stop();
    });
  }

}
