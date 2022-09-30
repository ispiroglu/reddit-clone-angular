import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreatePost() {
    this.router.navigate(['/create-post'])
  }

  goToCreateSubreddit() {
    /* Can do this in a modal */
    this.router.navigate(['/create-subreddit'])
  }
}
