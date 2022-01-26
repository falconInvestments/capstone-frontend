import { Component, OnInit } from '@angular/core';
import { UserStore } from '../store/user.store';
import { User } from '../user.model';

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

  constructor(private userStore: UserStore) {}

  ngOnInit(): void {
    this.userStore.state$.subscribe((state) => {
      this.currentUser = state.currentUser;
    });
  }
}
