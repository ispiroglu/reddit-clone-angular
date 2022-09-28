import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {AuthModule} from "./auth/auth.module";
import { PostTileComponent } from './home/post-tile/post-tile.component';
import { HomeSideBarComponent } from './home/home-side-bar/home-side-bar.component';
import { HomeSubredditSideBarComponent } from './home/home-subreddit-side-bar/home-subreddit-side-bar.component';
import { VoteButtonComponent } from './shared/vote-button/vote-button.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostTileComponent,
    HomeSideBarComponent,
    HomeSubredditSideBarComponent,
    VoteButtonComponent,
    CreatePostComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
