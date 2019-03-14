export interface IComment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface ICommentList {
  data: IComment[];
  totalCount: number;
}
