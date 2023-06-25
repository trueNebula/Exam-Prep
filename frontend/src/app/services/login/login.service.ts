import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() { }
  axios = require('axios').default;

  login(user: any) {
    return this.axios.post('http://localhost:3000/auth/login', user);
  }

}
