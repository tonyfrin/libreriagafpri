export interface PostsAttributes {
  id: number;
  authorId: number;
  postType: string;
  status: string;
  permanentLink: string | null;
  visibility: string;
  createdAt: Date;
  modifiedAt: Date;
}
