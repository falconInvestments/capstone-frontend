import { Component, OnInit } from '@angular/core';
import { UserStore } from '../store/user.store';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  isSignedIn: boolean = false;
  currentUser: User = {
    id: NaN,
    firstName: '',
    lastName: '',
    email: '',
  };

  constructor(private userStore: UserStore, private userService: UserService) {}

  ngOnInit(): void {
    const userSubscription = this.userStore.state$.subscribe((state) => {
      if (state.currentUser.id) {
        this.userService.retrieveUserDetails(state.currentUser.id);
        this.currentUser = state.currentUser;
        if (this.currentUser.email) {
          this.isSignedIn = state.isSignedIn;
          userSubscription.unsubscribe();
        }
      } else {
      }
    });
  }
}
