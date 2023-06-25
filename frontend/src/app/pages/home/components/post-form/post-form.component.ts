import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoggedUser } from 'src/app/model/loggedUser';
import { PostsService } from 'src/app/services/posts/posts.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private api: PostsService, private snackBar: MatSnackBar, private sharedService: SharedService) {
    sharedService.changeEmitted$.subscribe(
      user => {
        this.user = user;
      }
    );
  }

  user: LoggedUser = {
    role: 'anon'
  };
  
  @Output() postAddedEvent = new EventEmitter<string>();

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
      this.postAddedEvent.emit();
      this.openSnackBar("Post added!", "Close");
    }).catch((error: any) => {
      console.log(error);
    });
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

}
