import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post/post.model';
import { PostService } from '../shared/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts : Post[]

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    console.log("Something happenede");
    
    this.postService.getAllPosts().subscribe( response => {
      console.log(response);
      this.posts = response.body!!
    }, error => {
      console.log(error);
    })
  }

}
