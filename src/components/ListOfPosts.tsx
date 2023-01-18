import { PostProps, ListOfPostsProps } from '../types';
import { Post } from './Post';

export const ListOfPosts = ({ posts, section } : ListOfPostsProps): JSX.Element => (
    <ul className="postsContainer" data-testid="postsContainer">
      {posts
        .filter(post => post.tags?.includes(section))
        .map((post: PostProps, index:number) => (
          <Post post={post} key={index} />
        ))}
    </ul>
);
