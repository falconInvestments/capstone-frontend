import { Injectable } from '@angular/core';
import { Certificate } from '../certificate.model';
import { User } from '../user.model';
import { Store } from './store';

class UserState {
  isSignedIn: boolean = false;
  currentUser: User = {
    id: NaN,
    firstName: '',
    lastName: '',
    email: '',
  };
  certificates: Certificate[] = [];
}

@Injectable()
export class UserStore extends Store<UserState> {
  constructor() {
    super(new UserState());
  }

  setCertificates(newCertificates: Certificate[]) {
    this.setState({ ...this.state, certificates: newCertificates });
  }
}
