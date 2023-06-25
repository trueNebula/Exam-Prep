import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @Input() 
  public set value(value: string) {
    this.getPosts();
  }

  mockPosts = [
    {
      "id": 3,
      "title": "lmao",
      "content": "ok lets go",
      "date": "11/02/2023",
      "visibility": "public",
      "creator": "dov36"
    },
    {
      "id": 4,
      "title": "private one",
      "content": "pls dont show",
      "date": "11/02/2023",
      "visibility": "private",
      "creator": "dov36"
    },
    {
      "id": 5,
      "title": "lol even",
      "content": "please work",
      "date": "11/02/2023",
      "visibility": "public",
      "creator": "trNebula"
    },
  ];

  realPosts: Post[] = [];
  postsLoaded = false;

  constructor(private api: PostsService) {}

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.api.getPosts().then((res:any) => {
      this.realPosts = res.data;
      this.postsLoaded = true;
    });
  }

  refreshList(value: any) {
    console.log("refreshing list");
    this.getPosts();
  }

}
