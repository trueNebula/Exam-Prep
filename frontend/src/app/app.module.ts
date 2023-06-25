import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PostFormComponent } from './pages/home/components/post-form/post-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostListComponent } from './pages/home/components/post-list/post-list.component';
import { PostListItemComponent } from './pages/home/components/post-list-item/post-list-item.component';
import { LoginComponent } from './pages/login/login/login.component';
import { LoginFormComponent } from './pages/login/components/login-form/login-form.component'
import { SharedService } from './services/shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostFormComponent,
    PostListComponent,
    PostListItemComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatProgressSpinnerModule,

    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
