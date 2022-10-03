import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
})
export class PostTileComponent implements OnInit {
  @Input() posts: Post[];

  faComments = faComment

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPost(subredditName: string, title: string) {
    console.log('clickedGoToPost');
    
    this.router.navigateByUrl(`/r/${subredditName}/${title}`)
  }
}
