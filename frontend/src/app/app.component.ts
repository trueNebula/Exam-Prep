import { Component } from '@angular/core';
import { LoggedUser } from './model/loggedUser';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe(
      user => {
        this.user = user;
      }
    );
  }
  
  user: LoggedUser = {
    role: 'anon'
  };

}
