import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';
import { SharedService } from 'src/app/services/shared/shared.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form!: FormGroup;
  constructor(private fb: FormBuilder, private api: LoginService ,private snackBar: MatSnackBar, private router: Router, private sharedService: SharedService) {}

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
      const decodedToken = this.getDecodedAccessToken(response.data.access_token);

      this.sharedService.emitChange({username: decodedToken.username, role: decodedToken.role});
      this.openSnackBar("Login successful!", "Close");
      this.router.navigate(['/home']);

    }).catch((error: any) => {
      console.log(error);
      this.openSnackBar("Login failed!", "Close");

    });

  }
 
  handleLoginAsAnon(){
    this.sharedService.emitChange({role: "anon"});
    this.openSnackBar("Welcome!", "Close");
    this.router.navigate(['/home']);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, { duration: 5000 });
  }

  private getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
