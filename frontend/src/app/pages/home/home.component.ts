import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoggedUser } from 'src/app/model/loggedUser';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  constructor(private sharedService: SharedService) {
    this.subscription = sharedService.changeEmitted$.subscribe(
      user => {
        this.user = user;
        console.log(user)
      }
    );
  }

  private subscription: Subscription;

  ngOnDestroy() {
    console.log(this.subscription);
    this.subscription.unsubscribe();
  }

  user: LoggedUser = {
    role: 'anon'
  };

  postAdded = '';
  receivePostAdded($event: any) {
    this.postAdded = $event;
    console.log(this.user)
  }
}
