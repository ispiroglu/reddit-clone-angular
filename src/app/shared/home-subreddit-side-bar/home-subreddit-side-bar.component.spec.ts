import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSubredditSideBarComponent } from './home-subreddit-side-bar.component';

describe('HomeSubredditSideBarComponent', () => {
  let component: HomeSubredditSideBarComponent;
  let fixture: ComponentFixture<HomeSubredditSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSubredditSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSubredditSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
