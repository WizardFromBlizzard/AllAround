import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.api.getPosts().subscribe(resp => console.log(resp, "POSTS"));
  }

}
