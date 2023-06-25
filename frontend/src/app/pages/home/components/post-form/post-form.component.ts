import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent {
  constructor() {}

  title = new FormControl('');
  content = new FormControl('');
  visibility = new FormControl(true);
  
  createPost() {
    const date = new Date();
    const user = "test";
    console.log(date);

    const api = new PostsService();
    
    // call the api and json decode the response
    api.getHello().then((response: any) => {
      console.log(response.data);
    }
    ).catch((error: any) => {
      console.log(error);
    });

  }

}
