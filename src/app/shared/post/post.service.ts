import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseHttpService } from '../base-http/base-http.service';
import { LOCALHOST_POST } from './post.constants';
import { Post } from './post.model';
import { CreatePostPayload } from '../../post/create-post/create-post.payload';

@Injectable({
  providedIn: 'root',
})
export class PostService extends BaseHttpService {
  constructor(protected override httpClient: HttpClient) {
    super(httpClient);
  }

  /*
    TODO: Need to change get all posts to hot posts
  */

  /*
    TODO: Need to get user subscriptions get posts from that list
  */

  getAllPosts() {
    console.log('ASDASD');

    return this.httpGet<Array<Post>>(LOCALHOST_POST);
  }

  createPost(createPostPayload: CreatePostPayload) {
    return this.httpPost<any>(LOCALHOST_POST, createPostPayload); // Should get URI of created post
  }

  getPost(postTitle: string, subreddit: string) {
    return this.httpGet<Post>(LOCALHOST_POST + `/${subreddit}/${postTitle}`);
  }

  getAllPostsByUser(username: string) {
    return this.httpGet<Post[]>(LOCALHOST_POST + `/${username}`);
  }
}
