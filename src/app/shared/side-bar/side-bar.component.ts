import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-home-side-bar',
  templateUrl: './home-side-bar.component.html',
  styleUrls: ['./home-side-bar.component.css']
})
export class HomeSideBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToCreatePost() {
    this.router.navigate(['/create-post'])
  }

  goToCreateSubreddit() {
    /* Can do this in an modal */
    this.router.navigate(['/create-subreddit'])
  }
}
