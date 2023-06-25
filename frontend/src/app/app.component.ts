import { Component } from '@angular/core';
import { LoggedUser } from './model/loggedUser';
import { SharedService } from './services/shared/shared.service';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login/login.component';

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

  onOutletLoaded(component: HomeComponent | LoginComponent) {
    if (component instanceof HomeComponent) {
      component.user = this.user;
    } else if (component instanceof LoginComponent) {
    }
  }
}
