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
    return this.axios.post('http://localhost:3000/api/posts', post);
  }

  getPosts() {
    return this.axios.get('http://localhost:3000/api/posts');
  }

  updatePost(post: Post) {
    return this.axios.put('http://localhost:3000/api/posts', post);
  }

  deletePost(post: Post) {
    return this.axios.delete('http://localhost:3000/api/posts', { data: post });
  }
  

}
