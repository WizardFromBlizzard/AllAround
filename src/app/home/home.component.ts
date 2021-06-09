import { Component, OnInit } from '@angular/core';
import { ICanExitComponent } from '../can-exit.guard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, ICanExitComponent {

  constructor() { }

  ngOnInit(): void {
  }

  canExit(): boolean {
    if(confirm("Do you wish to proceed?")) {
      return true;
    } 
    return false;
  }

}
