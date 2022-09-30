export interface Post {
  title: string;
  url: string;
  desc: string;
  voteAverage: number;
  ownerUsername: string;
  subredditName: string;
  commentCount: number;
  creationDate: Date;
  upVote: boolean;
  downVote: boolean;
}
