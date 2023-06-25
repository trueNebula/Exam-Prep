import { Component, Input } from '@angular/core';
import { LoggedUser } from 'src/app/model/loggedUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor() {}

  userData: LoggedUser = {
    role: 'anon'
  };

  @Input() 
  public set setUserData(value: LoggedUser) {
    this.userData = value;
    console.log(this.userData);
  }
}
