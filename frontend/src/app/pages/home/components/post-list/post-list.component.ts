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
  take = 5;
  currPage = 1;
  postCount = 0;

  constructor(private api: PostsService) {}

  ngOnInit() {
    this.getPosts(this.currPage);
  }

  private getPosts(page: number=1) {
    console.log(page);
    this.api.getPosts(page, this.take).then((res:any) => {
      this.realPosts = res.data[0];
      this.postCount = res.data[1].count;
      this.postsLoaded = true;
    });
  }

  refreshList(value: any) {
    console.log("refreshing list");
    this.getPosts();
  }

  onChangePagePrev() {
    if (this.currPage <= 1) return;
    this.getPosts(--this.currPage);
  }

  onChangePageNext() {
    if (this.currPage >= Math.ceil(this.postCount / this.take)) return;
    this.getPosts(++this.currPage);
  }

}
