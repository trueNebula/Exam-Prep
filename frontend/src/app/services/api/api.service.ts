import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor() { }
  axios = require('axios').default;

  getHello() {
    return this.axios.get('http://localhost:3000/api/hello');
  }

}
