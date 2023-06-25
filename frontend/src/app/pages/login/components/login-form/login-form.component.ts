import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private api: LoginService ,private snackBar: MatSnackBar,) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  handleOnSubmit() {
    const { username, password } = this.form.value;
    console.log(username, password);

    this.api.login({
      name: username,
      password: password,
    }).then((response: any) => {
      console.log(response.data);
      this.openSnackBar("Login successful!", "Close");

    }).catch((error: any) => {
      console.log(error);
      this.openSnackBar("Login failed!", "Close");

    });

  }
 
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

}
