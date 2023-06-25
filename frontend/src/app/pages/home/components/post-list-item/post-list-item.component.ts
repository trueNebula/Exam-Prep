import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {
  @Input() set post(value: any) {
    const { title, content, visibility, date, creator} = value;
    this.title = title;
    this.content = content;
    this.visibility = visibility;
    this.date = date;
    this.creator = creator;
  };

  title: string | undefined;
  content: string | undefined;
  visibility: string | undefined;
  date: string | undefined;
  creator: string | undefined;

  handleOnDelete() {
    console.log('delete ', this.title)
  }

}
