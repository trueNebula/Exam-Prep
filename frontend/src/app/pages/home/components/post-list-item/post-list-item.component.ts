import { Component, Inject, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  constructor(private api: PostsService) {}
  @Input() set post(value: any) {
    const { id, title, content, visibility, date, creator} = value;
    this.id = id;
    this.title = title;
    this.content = content;
    this.visibility = visibility;
    this.date = date;
    this.creator = creator;
  };

  @Output() forceRefresh: EventEmitter<string> = new EventEmitter<string>();

  id?: number
  title: string | undefined;
  content: string | undefined;
  visibility: string | undefined;
  date: string | undefined;
  creator: string | undefined;

  handleOnDelete() {
    console.log('delete ', this.id);

    if(this.id == undefined) {
      console.log("undefined id");
      return;
    }

    this.api.deletePost(this.id).then((response: any) => {
      this.forceRefresh.emit('refresh');
    }
    ).catch((error: any) => {
      console.log(error);
    });
  }

}
