import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/shared/post/post.model';
import { PostService } from 'src/app/shared/post/post.service';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.css']
})
export class PostViewerComponent implements OnInit {

  postTitle: string
  subredditName: string

  post: Post
  constructor(private activeRoute: ActivatedRoute,
              private postService: PostService) { }

  ngOnInit(): void {
    this.postTitle = this.activeRoute.snapshot.params['post-title']
    this.subredditName = this.activeRoute.snapshot.params['subreddit']

    this.postService.getPost(this.postTitle, this.subredditName).subscribe(
      response => {
        console.log(response);
        if (response.body !== null)
          this.post = response.body
      }, error => {
        console.log(error);
      }
    )
  }

}
