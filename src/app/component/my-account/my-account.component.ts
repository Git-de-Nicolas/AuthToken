import {Component, OnInit} from '@angular/core';
import {User} from '../../entity/user.entity';
import {SecurityService} from '../../service/security.service';
import {HttpClient} from '@angular/common/http';
import {UsersService} from '../../service/users.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {

  user: User;

  constructor(private userService: UsersService) {
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe(value => {
      this.user = value;
    });
  }

}
