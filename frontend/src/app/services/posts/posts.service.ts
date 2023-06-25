import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/post';


@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor() { }
  axios = require('axios').default;

  getHello() {
    return this.axios.get('http://localhost:3000/api/hello');
  }

  createPost(post: Post) {
    console.log(post);

    //return this.axios.post('http://localhost:3000/api/posts', post);

  }

}
