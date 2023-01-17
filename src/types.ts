export type PostProps = {
  id: number,
  title: string,
  body: string,
  userId: number,
  tags: string[],
  reactions: number,
};

export type ListOfPostsProps = {
  posts: PostProps[],
  section: string,
};
