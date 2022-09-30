import { Component, OnInit } from '@angular/core';
import { Subreddit } from 'src/app/shared/subreddit/subreddit.model';
import {SubredditService} from "../../shared/subreddit/subreddit.service";

@Component({
  selector: 'app-list-subreddits',
  templateUrl: './list-subreddits.component.html',
  styleUrls: ['./list-subreddits.component.css']
})
export class ListSubredditsComponent implements OnInit {

  subreddits: Subreddit[]
  constructor(private subredditService: SubredditService) { }

  ngOnInit(): void {
    this.subredditService.getAllSubreddits().subscribe(
      response => {
        if (response.body !== null)
          this.subreddits = response.body
        
          console.log(this.subreddits);
      }
    )
  }

}
