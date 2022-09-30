import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/shared/post/post.service';
import { Subreddit } from 'src/app/shared/subreddit/subreddit.model';
import { SubredditService } from 'src/app/shared/subreddit/subreddit.service';
import { CreatePostPayload } from './create-post.payload';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup
  subreddits: Subreddit[]

  constructor(private postService: PostService,
              private subredditService: SubredditService,
              private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl('', Validators.required),
      subredditName: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })

    this.subredditService.getAllSubreddits().subscribe(
      response => {
        if (response.body !== null)
          this.subreddits = response.body
      }, error => {
        console.log(error);
      }
    ) // Should show subscribed subreddits. But can type what he wants.
  }

  onSubmit() {
    const payload: CreatePostPayload = {
      title: this.postForm.value.title,
      subredditName: this.postForm.value.subredditName,
      desc: this.postForm.value.description
    }

    this.postService.createPost(payload).subscribe(
      response => {
        console.log(response); // Should use the returning url to navigate to the post
      }, error => {
        console.log(error);
      })
  }

  onCancel() {
    this.router.navigateByUrl('/');
  }

}
