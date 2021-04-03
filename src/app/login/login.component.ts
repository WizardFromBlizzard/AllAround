import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USERS } from '../mocked-users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  users = USERS;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(username: string, password: string) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    this.router.navigate(['/home']);
  }

}
