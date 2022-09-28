export interface Post {
  id: number;
  title: string;
  url: string;
  desc: string;
  voteCount: number;
  ownerUsername: string;
  subredditName: string;
  commentCount: number;
  creationDate: Date;
  upVote: boolean;
  downVote: boolean;
}
