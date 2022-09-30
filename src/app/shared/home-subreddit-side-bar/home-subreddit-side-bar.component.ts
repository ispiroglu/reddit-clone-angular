import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/post/post.model';
import { Subreddit } from 'src/app/shared/subreddit/subreddit.model';

@Component({
  selector: 'app-home-subreddit-side-bar',
  templateUrl: './home-subreddit-side-bar.component.html',
  styleUrls: ['./home-subreddit-side-bar.component.css']
})
export class HomeSubredditSideBarComponent implements OnInit {

  subreddits: Subreddit[]
  displayViewAll = false

  constructor() { }

  ngOnInit(): void {
  }

  

  
}
