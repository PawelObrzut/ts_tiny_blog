import { IPost } from '../types';
import { Post } from './Post';

type ListOfPostsProps = {
  posts: IPost[]
};

export const ListOfPosts = ({ posts } : ListOfPostsProps): JSX.Element => (
    <ul className="postsContainer">
      {posts.map((post: IPost, index:number) => (
        <Post post={post} key={index} />
      ))}
    </ul>
);
