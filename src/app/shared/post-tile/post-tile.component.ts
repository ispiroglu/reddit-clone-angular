import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { faComment } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-post-tile',
  templateUrl: './post-tile.component.html',
  styleUrls: ['./post-tile.component.css'],
})
export class PostTileComponent implements OnInit {
  @Input() posts: Post[];

  faComments = faComment

  constructor() {}

  ngOnInit(): void {}

  goToPost(id: string) {
    console.log('clickedGoToPost');
  }
}
