import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateSubredditPayload } from 'src/app/subreddit/create-subreddit/create-subreddit.model';
import { BaseHttpService } from '../base-http/base-http.service';
import { LOCALHOST_SUBREDDIT } from './subreddit.constants';
import { Subreddit } from './subreddit.model'


@Injectable({
  providedIn: 'root'
})
export class SubredditService extends BaseHttpService {

  constructor(protected override httpClient: HttpClient) {
    super(httpClient)
  }

  getAllSubreddits() {
    return this.httpGet<Subreddit[]>(LOCALHOST_SUBREDDIT)
  }

  createSubreddit(payload: CreateSubredditPayload) {
    return this.httpPost<any>(LOCALHOST_SUBREDDIT, payload)
  }

  getSubreddit(subredditName: string) {
    return this.httpGet<Subreddit>(LOCALHOST_SUBREDDIT + `/${subredditName}`)
  }

  getTop3Subreddit() {

  }
}
