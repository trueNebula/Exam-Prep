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

  getPosts(page: number, take: number = 5) {
    return this.axios.get(`http://localhost:3000/api/posts?page=${page}&take=${take}`);
  }

  updatePost(post: Post, id: number) {
    return this.axios.put('http://localhost:3000/api/posts', post);
  }

  deletePost(id: number) {
    return this.axios.delete(`http://localhost:3000/api/posts/${id}`);
  }
  
}
