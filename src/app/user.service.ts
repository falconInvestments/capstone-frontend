import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStore } from './store/user.store';

const usersUrl = 'https://falconinvestments.herokuapp.com/users/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private userStore: UserStore) {}

  retrieveUserDetails(userId: number) {
    this.http.get(usersUrl + userId.toString()).subscribe((response: any) => {
      this.userStore.setState({
        ...this.userStore.state,
        currentUser: {
          ...this.userStore.state.currentUser,
          firstName: response.firstName,
          lastName: response.lastName,
          email: response.email,
        },
      });
    });
  }
}
