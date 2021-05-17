import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users$: Observable<User[]> = new Observable<User[]>();
  users: User[] = [];
  username: string = '';
  names: string[] = [];

  constructor(
    private userService: UserService,
    private auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    // this.users$ = this.userService.getAllUsers();
    this.userService.getAllUsers().subscribe((resp) => {
      this.users = resp;
      console.log('INITAEA', this.users);
      this.names = this.users.map(({username}) => username)
    });
    // console.log('on initi', this.users);
  }

  onSubmit() {
    console.log(this.username);
    this.auth.isAuthenticated(this.username);
  }
}
