import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { User } from '../models/user';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseURL = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseURL}/users`)
      // .pipe(tap(console.log),
      //       map(({name}) => {return name}),
      //       tap(console.log)
      //   );
  }
}
