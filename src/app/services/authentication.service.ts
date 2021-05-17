import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: User[] = [];
  isAuth: boolean = false;
  usernames: string[] = [];
  constructor(private userService: UserService) { }

  isAuthenticated(user: string) {
    this.userService.getAllUsers().subscribe((resp) => {
      this.users = resp;
      console.log('INITAEA', this.users);
      this.usernames = this.users.map(({username}) => username)
      this.isAuth = this.usernames.includes(user);
      console.log('AUTIC', this.isAuth)
    });

     console.log(this.users, user, 'adsfs');
     

  }

   daLiJeRealnaOvaAuthtentikacija() : boolean {
    return this.isAuth;
  }
}
