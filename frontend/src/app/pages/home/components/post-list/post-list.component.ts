import { Component } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  mockPosts = [
    {
      "title": "lmao",
      "content": "ok lets go",
      "date": "11/02/2023",
      "visibility": "public",
      "creator": "dov36"
    },
    {
      "title": "private one",
      "content": "pls dont show",
      "date": "11/02/2023",
      "visibility": "private",
      "creator": "dov36"
    },
    {
      "title": "lol even",
      "content": "please work",
      "date": "11/02/2023",
      "visibility": "public",
      "creator": "trNebula"
    },
  ];
}
