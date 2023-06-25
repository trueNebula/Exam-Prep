import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostsService } from 'src/app/services/posts/posts.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private api: PostsService) {}
  
  ngOnInit() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      visibility: [true]
    });

  }
 
  handleOnSubmit() {
    const date = new Date();
    const creator = "test";

    // test to make sure api works
    // api.getHello().then((response: any) => {
    //   console.log(response.data);
    // }
    // ).catch((error: any) => {
    //   console.log(error);
    // });

    // if(this.title.value == '' || this.content.value == '') {
    //   this.emtpyContent = true;
    //   this.emtpyTitle = true;
    //   console.log("undefined values")
    //   return;
    // }

    const { title, content, visibility } = this.form.value;

    //console.log(title, content, visibility ? "public" : "private", date, creator);

    this.api.createPost({
      title: title,
      content: content,
      visibility: visibility ? "public" : "private",
      date: date,
      creator: creator
    }).then((response: any) => {
      console.log(response.data);
    }).catch((error: any) => {
      console.log(error);
    });
    
  }

}
